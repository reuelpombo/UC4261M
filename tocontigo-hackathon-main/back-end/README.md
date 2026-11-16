# TôContigo API

Back-end em **TypeScript + Node.js** (Express + SQLite) para o CRUD dos registros que o paciente quer compartilhar com o médico.

## Como rodar

```bash
npm install
cp .env.example .env   # opcional
npm run dev            # desenvolvimento (recarrega ao salvar)
```

Servidor em `http://localhost:3000`. O banco (`tocontigo.db`) é criado automaticamente na primeira execução.

Outros comandos:

```bash
npm test         # testes automatizados
npm run build    # compila para dist/
npm start        # roda a versão compilada
```

## Modelo de dados

**pacientes**: `id`, `nome`, `cpf` (único, só dígitos), `data_nascimento`, `criado_em`
**registros**: `id`, `paciente_id` (FK → pacientes, `ON DELETE CASCADE`), `mensagem`, `criado_em`, `atualizado_em`

## Rotas

| Método | Rota | Descrição |
|---|---|---|
| GET | `/health` | verifica se a API está no ar |
| POST | `/pacientes` | cadastra paciente |
| GET | `/pacientes/:id` | busca paciente |
| POST | `/pacientes/:id/registros` | cria registro |
| GET | `/pacientes/:id/registros` | lista registros do paciente (mais recentes primeiro) |
| GET | `/registros/:id` | busca um registro |
| PUT | `/registros/:id` | edita a mensagem |
| DELETE | `/registros/:id` | apaga o registro |

### Exemplos (curl)

```bash
# cadastrar paciente (CPF aceita com ou sem máscara)
curl -X POST localhost:3000/pacientes -H "Content-Type: application/json" \
  -d '{"nome":"Maria da Silva","cpf":"123.456.789-09","data_nascimento":"1950-03-12"}'

# criar registro
curl -X POST localhost:3000/pacientes/1/registros -H "Content-Type: application/json" \
  -d '{"mensagem":"Senti tontura depois do remédio da pressão"}'

# listar
curl localhost:3000/pacientes/1/registros

# editar
curl -X PUT localhost:3000/registros/1 -H "Content-Type: application/json" \
  -d '{"mensagem":"Mensagem corrigida"}'

# apagar
curl -X DELETE localhost:3000/registros/1
```

## Decisões e limitações

- O **CPF nunca é devolvido** pela API; as rotas usam o `id` do paciente.
- Não há autenticação ainda: para a demo do hackathon os dados são simulados. O próximo passo é login (CPF + data de nascimento) com token, e cada rota aceitar só o `id` do próprio paciente.
- Dados de saúde são sensíveis (LGPD): em produção, usar PostgreSQL com criptografia em repouso, HTTPS e log de acesso.
- Estrutura: `src/db.ts` (tabelas), `src/schemas.ts` (validação), `src/app.ts` (rotas), `src/server.ts` (inicialização).
