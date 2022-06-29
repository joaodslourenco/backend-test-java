import veiculos, { IVeiculo } from "../models/Veiculo";

export const verifyIfVehicleAlreadyExists = async (newVehicle: IVeiculo) => {
  const existingVehicle = await veiculos.findOne({ placa: newVehicle.placa });
  console.log(existingVehicle);
  if (existingVehicle) throw Error("Veículo já foi cadastrado!");
  return;
};
