import { HydratedDocument } from "mongoose";
import estabelecimentos from "../models/Estabelecimento";
import { IVeiculo } from "../models/Veiculo";

export class EstabelecimentoServices {
  // pensar em uma forma de tornar os métodos que manipulam o array do estacionamento em privados, já que não vão ser chamados em nenhum lugar além do método add ou delete vehicle na veiculoServices
  static async addToVeiculosArrayOnEstablishment(
    vehicle: HydratedDocument<IVeiculo>,
  ) {
    const establishmentId = vehicle.estabelecimento;
    const vehicleId = vehicle._id.toString();
    await estabelecimentos.findByIdAndUpdate(establishmentId, {
      $push: { veiculos: [...[vehicleId]] },
    });
  }

  static async deleteFromVeiculosArrayOnEstablishment(
    vehicle: HydratedDocument<IVeiculo>,
  ) {
    const establishmentId = vehicle.estabelecimento;
    const vehicleId = vehicle._id;
    await estabelecimentos.findByIdAndUpdate(establishmentId, {
      $pull: { veiculos: [vehicleId] },
    });
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
  }

  static async decreaseVagasDisponiveis(vehicle: IVeiculo) {
    const establishmentId = vehicle.estabelecimento;
    if (vehicle.tipo === "carro") {
      await estabelecimentos.findByIdAndUpdate(establishmentId, {
        $inc: { vagasDisponiveisCarros: -1 },
      });
    } else {
      await estabelecimentos.findByIdAndUpdate(establishmentId, {
        $inc: { vagasDisponiveisMotos: -1 },
      });
    }
  }

  static async increaseVagasDisponiveis(vehicle: IVeiculo) {
    const establishmentId = vehicle.estabelecimento;
    if (vehicle.tipo === "carro") {
      await estabelecimentos.findByIdAndUpdate(establishmentId, {
        $inc: { vagasDisponiveisCarros: +1 },
      });
    } else {
      await estabelecimentos.findByIdAndUpdate(establishmentId, {
        $inc: { vagasDisponiveisMotos: +1 },
      });
    }
  }
}
