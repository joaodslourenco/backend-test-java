import { HydratedDocument } from "mongoose";
import veiculos, { IVeiculo } from "../models/Veiculo";
import { VeiculoRepository } from "../repositories/veiculoRepository";
import { EstabelecimentoServices } from "./estabelecimentoServices";

export class VeiculoServices {
  constructor() {}
  private async verifyIfVehicleAlreadyExists(vehicle: IVeiculo) {
    const existingVehicle = await VeiculoRepository.getOneVehicle(vehicle);
    if (existingVehicle) {
      throw new Error("Veículo já foi cadastrado!");
    }
  }

  public async addVehicle(vehicle: HydratedDocument<IVeiculo>) {
    try {
      this.verifyIfVehicleAlreadyExists(vehicle);
      await EstabelecimentoServices.verifyParkingSpaces(vehicle);
      const newVehicle = new veiculos(vehicle);
      await newVehicle.save();
      await EstabelecimentoServices.addToVeiculosArrayOnEstablishment(
        newVehicle,
      );
      await EstabelecimentoServices.decreaseVagasDisponiveis(newVehicle);

      return vehicle;
    } catch (error) {
      throw new Error(`Erro ao adicionar veículo: ${error}`);
    }
  }

  public async deleteVehicle(vehicle: HydratedDocument<IVeiculo>) {
    await EstabelecimentoServices.increaseVagasDisponiveis(vehicle);
    await EstabelecimentoServices.deleteFromVeiculosArrayOnEstablishment(
      vehicle,
    );
    await VeiculoRepository.deleteVehicle(vehicle);
  }
}
