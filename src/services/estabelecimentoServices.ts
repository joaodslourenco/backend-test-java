import estabelecimentos from "../models/Estabelecimento";
import { IVeiculo } from "../models/Veiculo";

export const addToVeiculosArrayOnEstablisment = async (
  newVehicle: IVeiculo,
) => {
  const establishmentId = newVehicle.estabelecimento;
  const vehicleId = newVehicle._id;
  estabelecimentos.findByIdAndUpdate(
    establishmentId,
    {
      $push: { veiculos: [...[vehicleId]] },
    },
    {},
    (err) => {
      console.log(err);
    },
  );
};

export const verifyParkingSpaces = async (newVehicle: IVeiculo) => {
  const establishmentId = newVehicle.estabelecimento;
  const establishment = await estabelecimentos.findById(establishmentId);
  const vehicleType = newVehicle.tipo;

  if (
    (vehicleType === "carro" && establishment?.vagasDisponiveisCarros === 0) ||
    (vehicleType === "moto" && establishment?.vagasDisponiveisMotos === 0)
  ) {
    throw Error("Não existem vagas disponíveis!");
  }

  return;
};

export const updateVagasDisponiveis = (newVehicle: IVeiculo) => {
  const establishmentId = newVehicle.estabelecimento;
  if (newVehicle.tipo === "carro") {
    estabelecimentos.findByIdAndUpdate(
      establishmentId,
      {
        $inc: { vagasDisponiveisCarros: -1 },
      },
      {},
      (err) => {
        console.log(err);
      },
    );
  } else {
    estabelecimentos.findByIdAndUpdate(
      establishmentId,
      {
        $inc: { vagasDisponiveisMotos: -1 },
      },
      {},
      (err) => {
        console.log(err);
      },
    );
  }
};
