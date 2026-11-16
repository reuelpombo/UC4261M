import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { ZodError } from "zod";
import type { Db } from "./db";
import { idSchema, pacienteCreateSchema, registroSchema } from "./schemas";

class HttpError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

// Colunas devolvidas pela API (o CPF nunca é devolvido)
const PACIENTE_COLS = "id, nome, data_nascimento, criado_em";

export function createApp(db: Db) {
  const app = express();
  app.use(cors());
  app.use(express.json());

  const pacienteExiste = (id: number) =>
    db.prepare("SELECT 1 FROM pacientes WHERE id = ?").get(id) !== undefined;

  app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  // ---------- Pacientes ----------
  app.post("/pacientes", (req, res) => {
    const dados = pacienteCreateSchema.parse(req.body);

    const duplicado = db.prepare("SELECT 1 FROM pacientes WHERE cpf = ?").get(dados.cpf);
    if (duplicado) throw new HttpError(409, "CPF já cadastrado");

    const info = db
      .prepare("INSERT INTO pacientes (nome, cpf, data_nascimento) VALUES (?, ?, ?)")
      .run(dados.nome, dados.cpf, dados.data_nascimento);

    const paciente = db
      .prepare(`SELECT ${PACIENTE_COLS} FROM pacientes WHERE id = ?`)
      .get(info.lastInsertRowid);
    res.status(201).json(paciente);
  });

  app.get("/pacientes/:id", (req, res) => {
    const id = idSchema.parse(req.params.id);
    const paciente = db.prepare(`SELECT id, nome, cpf, data_nascimento, criado_em FROM pacientes WHERE id = ?`).get(id);
    if (!paciente) throw new HttpError(404, "Paciente não encontrado");
    res.json(paciente);
  });

  // ---------- Registros ----------
  // Create
  app.post("/pacientes/:id/registros", (req, res) => {
    const pacienteId = idSchema.parse(req.params.id);
    if (!pacienteExiste(pacienteId)) throw new HttpError(404, "Paciente não encontrado");
    const { mensagem } = registroSchema.parse(req.body);

    const info = db
      .prepare("INSERT INTO registros (paciente_id, mensagem) VALUES (?, ?)")
      .run(pacienteId, mensagem);

    const registro = db.prepare("SELECT * FROM registros WHERE id = ?").get(info.lastInsertRowid);
    res.status(201).json(registro);
  });

  // Read (lista do paciente)
  app.get("/pacientes/:id/registros", (req, res) => {
    const pacienteId = idSchema.parse(req.params.id);
    if (!pacienteExiste(pacienteId)) throw new HttpError(404, "Paciente não encontrado");

    const registros = db
      .prepare("SELECT * FROM registros WHERE paciente_id = ? ORDER BY criado_em DESC, id DESC")
      .all(pacienteId);
    res.json(registros);
  });

  // Read (um registro)
  app.get("/registros/:id", (req, res) => {
    const id = idSchema.parse(req.params.id);
    const registro = db.prepare("SELECT * FROM registros WHERE id = ?").get(id);
    if (!registro) throw new HttpError(404, "Registro não encontrado");
    res.json(registro);
  });

  // Update
  app.put("/registros/:id", (req, res) => {
    const id = idSchema.parse(req.params.id);
    const { mensagem } = registroSchema.parse(req.body);

    const info = db
      .prepare("UPDATE registros SET mensagem = ?, atualizado_em = datetime('now') WHERE id = ?")
      .run(mensagem, id);
    if (info.changes === 0) throw new HttpError(404, "Registro não encontrado");

    res.json(db.prepare("SELECT * FROM registros WHERE id = ?").get(id));
  });

  // Delete
  app.delete("/registros/:id", (req, res) => {
    const id = idSchema.parse(req.params.id);
    const info = db.prepare("DELETE FROM registros WHERE id = ?").run(id);
    if (info.changes === 0) throw new HttpError(404, "Registro não encontrado");
    res.status(204).send();
  });

  // ---------- Tratamento de erros ----------
  app.use((_req, _res, next) => next(new HttpError(404, "Rota não encontrada")));

  app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
    if (err instanceof ZodError) {
      return res.status(400).json({
        erro: "Dados inválidos",
        detalhes: err.issues.map((i) => ({ campo: i.path.join("."), mensagem: i.message })),
      });
    }
    if (err instanceof HttpError) {
      return res.status(err.status).json({ erro: err.message });
    }
    // JSON malformado
    if (err instanceof SyntaxError) {
      return res.status(400).json({ erro: "JSON inválido" });
    }
    console.error(err);
    res.status(500).json({ erro: "Erro interno do servidor" });
  });

  return app;
}
