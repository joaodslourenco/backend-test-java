import { HydratedDocument } from "mongoose";
import estabelecimentos from "../models/Estabelecimento";
import { IVeiculo } from "../models/Veiculo";

export class EstabelecimentoServices {
  static async addToVeiculosArrayOnEstablishment(
    newVehicle: HydratedDocument<IVeiculo>,
  ) {
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
  }

  static async deleteFromVeiculosArrayOnEstablishment(
    vehicle: HydratedDocument<IVeiculo>,
  ) {
    const establishmentId = vehicle.estabelecimento;
    const vehicleId = vehicle._id;
    estabelecimentos.findByIdAndUpdate(
      establishmentId,
      {
        $pull: { veiculos: [{ vehicleId }] },
      },
      {},
      (err) => {
        console.log(err);
      },
    );
  }

  static async verifyParkingSpaces(newVehicle: IVeiculo) {
    const establishmentId = newVehicle.estabelecimento;
    const establishment = await estabelecimentos.findById(establishmentId);
    const vehicleType = newVehicle.tipo;

    if (
      (vehicleType === "carro" &&
        establishment?.vagasDisponiveisCarros === 0) ||
      (vehicleType === "moto" && establishment?.vagasDisponiveisMotos === 0)
    ) {
      throw Error("Não existem vagas disponíveis!");
    }

    return;
  }

  static async decreaseVagasDisponiveis(vehicle: IVeiculo) {
    const establishmentId = vehicle.estabelecimento;
    if (vehicle.tipo === "carro") {
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
  }

  static async increaseVagasDisponiveis(vehicle: IVeiculo) {
    const establishmentId = vehicle.estabelecimento;
    if (vehicle.tipo === "carro") {
      estabelecimentos.findByIdAndUpdate(
        establishmentId,
        {
          $inc: { vagasDisponiveisCarros: +1 },
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
          $inc: { vagasDisponiveisMotos: +1 },
        },
        {},
        (err) => {
          console.log(err);
        },
      );
    }
  }
}
