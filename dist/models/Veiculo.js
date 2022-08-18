"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const veiculoSchema = new mongoose_1.default.Schema({
    id: { type: String },
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    cor: { type: String, required: true },
    placa: { type: String, required: true },
    tipo: { type: String, enum: ["carro", "moto"], required: true },
    estabelecimento: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "estabelecimentos",
        required: true,
    },
});
const veiculos = mongoose_1.default.model("Veiculos", veiculoSchema);
exports.default = veiculos;
