import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import type { Server } from "node:http";
import type { AddressInfo } from "node:net";
import { createApp } from "./app";
import { createDb } from "./db";

let server: Server;
let base: string;

before(async () => {
  const app = createApp(createDb(":memory:"));
  await new Promise<void>((resolve) => {
    server = app.listen(0, resolve);
  });
  base = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
});

after(() => {
  server.close();
});

const json = (method: string, path: string, body?: unknown) =>
  fetch(base + path, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body === undefined ? undefined : JSON.stringify(body),
  });

test("fluxo completo: paciente + CRUD de registros", async () => {
  // cria paciente (CPF com máscara é normalizado e nunca devolvido)
  let r = await json("POST", "/pacientes", {
    nome: "Maria da Silva",
    cpf: "123.456.789-09",
    data_nascimento: "1950-03-12",
  });
  assert.equal(r.status, 201);
  const paciente = await r.json();
  assert.equal(paciente.nome, "Maria da Silva");
  assert.equal("cpf" in paciente, false);

  // CPF duplicado
  r = await json("POST", "/pacientes", {
    nome: "Outra",
    cpf: "12345678909",
    data_nascimento: "1960-01-01",
  });
  assert.equal(r.status, 409);

  // create
  r = await json("POST", `/pacientes/${paciente.id}/registros`, {
    mensagem: "Tive tontura depois de tomar o remédio da pressão",
  });
  assert.equal(r.status, 201);
  const registro = await r.json();
  assert.equal(registro.paciente_id, paciente.id);

  // list
  r = await json("GET", `/pacientes/${paciente.id}/registros`);
  assert.equal((await r.json()).length, 1);

  // read
  r = await json("GET", `/registros/${registro.id}`);
  assert.equal(r.status, 200);

  // update
  r = await json("PUT", `/registros/${registro.id}`, { mensagem: "Mensagem editada" });
  assert.equal((await r.json()).mensagem, "Mensagem editada");

  // delete
  r = await json("DELETE", `/registros/${registro.id}`);
  assert.equal(r.status, 204);
  r = await json("GET", `/registros/${registro.id}`);
  assert.equal(r.status, 404);
});

test("validações e erros", async () => {
  let r = await json("POST", "/pacientes", { nome: "A", cpf: "123", data_nascimento: "x" });
  assert.equal(r.status, 400);

  r = await json("POST", "/pacientes/9999/registros", { mensagem: "oi" });
  assert.equal(r.status, 404);

  r = await json("GET", "/pacientes/abc");
  assert.equal(r.status, 400);

  r = await json("GET", "/rota-inexistente");
  assert.equal(r.status, 404);
});

test("apagar paciente remove os registros (CASCADE)", async () => {
  const p = await (
    await json("POST", "/pacientes", {
      nome: "João Souza",
      cpf: "98765432100",
      data_nascimento: "1948-07-01",
    })
  ).json();
  const reg = await (
    await json("POST", `/pacientes/${p.id}/registros`, { mensagem: "teste cascade" })
  ).json();

  // não há rota de DELETE de paciente; valida o cascade direto no banco
  const db = createDb(":memory:");
  db.prepare("INSERT INTO pacientes (nome, cpf, data_nascimento) VALUES ('x','11111111111','2000-01-01')").run();
  db.prepare("INSERT INTO registros (paciente_id, mensagem) VALUES (1, 'm')").run();
  db.prepare("DELETE FROM pacientes WHERE id = 1").run();
  const restantes = db.prepare("SELECT COUNT(*) AS n FROM registros").get() as { n: number };
  assert.equal(restantes.n, 0);
  assert.ok(reg.id);
});
