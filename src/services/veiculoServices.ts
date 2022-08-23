import { HydratedDocument } from "mongoose";
import { IVeiculo } from "../models/Veiculo";
import { VeiculoRepository } from "../repositories/veiculoRepository";
import { EstabelecimentoServices } from "./estabelecimentoServices";

export class VeiculoServices {
  constructor() {}
  private async verifyIfVehicleAlreadyExists(vehicle: IVeiculo) {
    const existingVehicle = await VeiculoRepository.getOneVehicle(vehicle);
    if (existingVehicle) throw Error("Veículo já foi cadastrado!");
    return;
  }

  public async addVehicle(vehicle: HydratedDocument<IVeiculo>) {
    try {
      this.verifyIfVehicleAlreadyExists(vehicle);
      await EstabelecimentoServices.addToVeiculosArrayOnEstablishment(vehicle);
      await EstabelecimentoServices.decreaseVagasDisponiveis(vehicle);
      return vehicle;
    } catch (error) {
      throw new Error(`Erro ao adicionar veículo: ${error}`);
    }
  }
}
