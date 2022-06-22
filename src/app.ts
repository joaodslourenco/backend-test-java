import express from "express";
import db from "./config/dbConnect";
import routes from "./routes";

db.on("error", () => console.log("Erro ao conectar com o banco de dados."));
db.once("open", () => console.log("Banco de dados conectado com sucesso."));

const app = express();

app.use(express.json());

routes(app);

export default app;
