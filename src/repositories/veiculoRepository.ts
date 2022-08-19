import veiculos, { IVeiculo } from "../models/Veiculo";

export class VeiculoRepository {
  static async getAllVehicles() {
    return veiculos.find().populate("estabelecimento", ["nome", "endereco"]);
  }

  static async getVehicleById(id: string) {
    return veiculos
      .findById(id)
      .populate("estabelecimento", ["nome", "endereco"]);
  }
}
