import { createApp } from "./app";
import { createDb } from "./db";

const port = Number(process.env.PORT ?? 3000);
const app = createApp(createDb());

app.listen(port, () => {
  console.log(`TôContigo API rodando em http://localhost:${port}`);
});
