import estabelecimentos from "../models/Estabelecimento";

export class EstabelecimentoRepository {
  static async getEstabelecimentosList() {
    return estabelecimentos.find().populate("veiculos");
  }
}
