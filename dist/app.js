"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbConnect_1 = __importDefault(require("./config/dbConnect"));
const routes_1 = __importDefault(require("./routes"));
dbConnect_1.default.on("error", () => console.log("Erro ao conectar com o banco de dados."));
dbConnect_1.default.once("open", () => console.log("Banco de dados conectado com sucesso."));
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, routes_1.default)(app);
exports.default = app;
