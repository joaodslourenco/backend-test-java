import mongoose, { Schema, Types } from "mongoose";
import { IVeiculo } from "./Veiculo";

export interface IEstabelecimento {
  id: string;
  nome: string;
  cnpj: string;
  endereco: string;
  telefone: string;
  qtdVagasMotos: number;
  qtdVagasCarros: number;
  vagasDisponiveisMotos: number;
  vagasDisponiveisCarros: number;
  veiculos: IVeiculo[];
}

const estabelecimentoSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
  cnpj: { type: String, required: true },
  endereco: { type: String, required: true },
  telefone: { type: String, required: true },
  qtdVagasMotos: { type: Number, required: true },
  qtdVagasCarros: { type: Number, required: true },
  vagasDisponiveisMotos: { type: Number, required: true },
  vagasDisponiveisCarros: { type: Number, required: true },
  veiculos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Veiculos" }],
});

const estabelecimentos = mongoose.model<IEstabelecimento>(
  "estabelecimentos",
  estabelecimentoSchema,
);

export default estabelecimentos;
