import mongoose from "mongoose";
import { IEstabelecimento } from "./Estabelecimento";

type tipoVeiculo = "carro" | "moto";

export interface IVeiculo {
  id: string;
  marca: string;
  modelo: string;
  cor: string;
  placa: string;
  tipo: tipoVeiculo;
  estabelecimento: IEstabelecimento;
}

const veiculoSchema = new mongoose.Schema<IVeiculo>({
  id: { type: String },
  marca: { type: String, required: true },
  modelo: { type: String, required: true },
  cor: { type: String, required: true },
  placa: { type: String, required: true },
  tipo: { type: String, required: true },
  estabelecimento: {
    type: mongoose.Types.ObjectId,
    ref: "Estabelecimentos",
    required: true,
  },
});

const veiculos = mongoose.model("Veiculos", veiculoSchema);

export default veiculos;
