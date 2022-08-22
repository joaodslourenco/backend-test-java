import { Document, HydratedDocument } from "mongoose";
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

  static async getOneVehicle(vehicle: IVeiculo): Promise<IVeiculo | null> {
    return veiculos.findOne({
      estabelecimento: vehicle.estabelecimento,
      placa: vehicle.placa,
    });
  }

  static async getVehicleByIdAndUpdate(id: string, data: any) {
    return veiculos.findByIdAndUpdate(id, data);
  }

  static async deleteVehicle(vehicle: HydratedDocument<IVeiculo>) {
    vehicle.delete();
  }
}
