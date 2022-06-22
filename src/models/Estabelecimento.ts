import mongoose from "mongoose";
import IVeiculo from "./Veiculo";

interface IEstabelecimento {
  id: string;
  nome: string;
  cnpj: number;
  endereco: string;
  telefone: number;
  qtdVagasMotos: number;
  qtdVagasCarros: number;
  vagasOcupadasMotos: number;
  vagasOcupadasCarros: number;
  veiculos: Array<IVeiculo>;
}

const estabelecimentoSchema = new mongoose.Schema<IEstabelecimento>({
  id: { type: String },
  nome: { type: String, required: true },
  cnpj: { type: Number, required: true },
  endereco: { type: String, required: true },
  telefone: { type: Number, required: true },
  qtdVagasMotos: { type: Number, required: true },
  qtdVagasCarros: { type: Number, required: true },
  vagasOcupadasMotos: { type: Number, required: true },
  vagasOcupadasCarros: { type: Number, required: true },
  veiculos: { type: mongoose.Types.Array, ref: "Veiculos" },
});

const estabelecimentos = mongoose.model(
  "Estabelecimentos",
  estabelecimentoSchema,
);

export default estabelecimentos;
