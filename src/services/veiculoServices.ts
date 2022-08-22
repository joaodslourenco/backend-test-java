import veiculos, { IVeiculo } from "../models/Veiculo";
import { VeiculoRepository } from "../repositories/veiculoRepository";

export class VeiculoServices {
  constructor() {}
  private async verifyIfVehicleAlreadyExists(vehicle: IVeiculo) {
    const existingVehicle = await VeiculoRepository.getOneVehicle(vehicle);
    if (existingVehicle) throw Error("Veículo já foi cadastrado!");
    return;
  }

  public async addVehicle(vehicle: IVeiculo) {
    try {
      this.verifyIfVehicleAlreadyExists(vehicle);

      return vehicle;
    } catch (error) {}
  }
}
