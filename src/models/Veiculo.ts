import mongoose from "mongoose";
import { IEstabelecimento } from "./Estabelecimento";

export interface IVeiculo {
  id: string;
  marca: string;
  modelo: string;
  cor: string;
  placa: string;
  tipo: string;
  estabelecimento: IEstabelecimento;
}

const veiculoSchema = new mongoose.Schema({
  id: { type: String },
  marca: { type: String, required: true },
  modelo: { type: String, required: true },
  cor: { type: String, required: true },
  placa: { type: String, required: true },
  tipo: { type: String, enum: ["carro", "moto"], required: true },
  estabelecimento: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "estabelecimentos",
    required: true,
  },
});

const veiculos = mongoose.model<IVeiculo>("Veiculos", veiculoSchema);

export default veiculos;
