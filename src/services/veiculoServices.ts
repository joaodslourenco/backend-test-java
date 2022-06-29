import veiculos, { IVeiculo } from "../models/Veiculo";

export const verifyIfVehicleAlreadyExists = async (newVehicle: IVeiculo) => {
  const existingVehicle = await veiculos.findOne({
    estabelecimento: newVehicle.estabelecimento,
    placa: newVehicle.placa,
  });
  if (existingVehicle) throw Error("Veículo já foi cadastrado!");
  return;
};
