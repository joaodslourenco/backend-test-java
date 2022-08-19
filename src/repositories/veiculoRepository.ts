import veiculos, { IVeiculo } from "../models/Veiculo";

export class VeiculoRepository {
  static async getAllVehicles() {
    return veiculos.find().populate("estabelecimento", ["nome", "endereco"]);
  }
}
