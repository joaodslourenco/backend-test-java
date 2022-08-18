"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const estabelecimentoSchema = new mongoose_1.default.Schema({
    id: { type: String },
    nome: { type: String, required: true },
    cnpj: { type: String, required: true },
    endereco: { type: String, required: true },
    telefone: { type: String, required: true },
    qtdVagasMotos: { type: Number, required: true },
    qtdVagasCarros: { type: Number, required: true },
    vagasDisponiveisMotos: { type: Number, required: true },
    vagasDisponiveisCarros: { type: Number, required: true },
    veiculos: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "Veiculos" }],
});
const estabelecimentos = mongoose_1.default.model("estabelecimentos", estabelecimentoSchema);
exports.default = estabelecimentos;
