import { HydratedDocument } from "mongoose";
import estabelecimentos, { IEstabelecimento } from "../models/Estabelecimento";

export class EstabelecimentoRepository {
  static async getEstabelecimentosList() {
    return estabelecimentos.find().populate("veiculos");
  }

  static async getEstabelecimentoById(id: string) {
    return estabelecimentos.findById(id).populate("veiculos");
  }

  static async addEstabelecimento(
    estabelecimento: HydratedDocument<IEstabelecimento>,
  ) {
    await estabelecimento.save();
  }
}
