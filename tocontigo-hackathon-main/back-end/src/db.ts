
import { DatabaseSync } from "node:sqlite";

export function createDb(
  path: string = process.env.DATABASE_PATH ?? "./tocontigo.db"
) {
  const db = new DatabaseSync(path);

  db.exec("PRAGMA journal_mode = WAL;");
  db.exec("PRAGMA foreign_keys = ON;");

  db.exec(`
    CREATE TABLE IF NOT EXISTS pacientes (
      id               INTEGER PRIMARY KEY AUTOINCREMENT,
      nome             TEXT    NOT NULL,
      cpf              TEXT    NOT NULL UNIQUE,
      data_nascimento  TEXT    NOT NULL,
      criado_em        TEXT    NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS registros (
      id             INTEGER PRIMARY KEY AUTOINCREMENT,
      paciente_id    INTEGER NOT NULL
                     REFERENCES pacientes(id) ON DELETE CASCADE,
      mensagem       TEXT    NOT NULL,
      criado_em      TEXT    NOT NULL DEFAULT (datetime('now')),
      atualizado_em  TEXT    NOT NULL DEFAULT (datetime('now'))
    );

    CREATE INDEX IF NOT EXISTS idx_registros_paciente
    ON registros(paciente_id);
  `);

  return db;
}

export type Db = ReturnType<typeof createDb>;
