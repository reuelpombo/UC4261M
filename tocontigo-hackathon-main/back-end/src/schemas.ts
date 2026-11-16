import { z } from "zod";

// Aceita "123.456.789-09" ou "12345678909" e normaliza para só dígitos
const cpfSchema = z
  .string()
  .transform((v) => v.replace(/\D/g, ""))
  .refine((v) => v.length === 11, "CPF deve ter 11 dígitos");

export const pacienteCreateSchema = z.object({
  nome: z.string().trim().min(2, "Nome muito curto").max(120),
  cpf: cpfSchema,
  data_nascimento: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Use o formato AAAA-MM-DD"),
});

export const registroSchema = z.object({
  mensagem: z.string().trim().min(1, "A mensagem não pode ser vazia").max(5000),
});

export const idSchema = z.coerce.number().int().positive();
