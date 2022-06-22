import express from "express";
import db from "./config/dbConnect";

db.on("error", () => console.log("Erro ao conectar com o banco de dados."));
db.once("open", () => console.log("Banco de dados conectado com sucesso."));

const app = express();

app.use(express.json());

export default app;
