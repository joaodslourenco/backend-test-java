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

export const updateVagasOcupadas = (newVehicle: IVeiculo) => {
  const establishmentId = newVehicle.estabelecimento;
  if (newVehicle.tipo === "carro") {
    estabelecimentos.findByIdAndUpdate(
      establishmentId,
      {
        $inc: { vagasOcupadasCarros: +1 },
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
        $inc: { vagasOcupadasMotos: +1 },
      },
      {},
      (err) => {
        console.log(err);
      },
    );
  }
};
