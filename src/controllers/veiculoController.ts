import { Request, Response } from "express";
import { HydratedDocument } from "mongoose";
import estabelecimentos from "../models/Estabelecimento";
import veiculos, { IVeiculo } from "../models/Veiculo";
import {
  addToVeiculosArrayOnEstablisment,
  updateVagasOcupadas,
} from "../services/estabelecimentoServices";
import { verifyIfVehicleAlreadyExists } from "../services/veiculoServices";

class VeiculoController {
  static listVeiculos = async (req: Request, res: Response) => {
    try {
      const vehicles = await veiculos
        .find()
        .populate("estabelecimento", ["nome", "endereco"]);
      return res.status(200).json(vehicles);
    } catch (err) {
      return res
        .status(400)
        .send({ message: `${err} - Erro ao carregar veículos.` });
    }
  };

  static listVeiculoById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const vehicle = await veiculos.findById(id);

      return res.status(200).send(vehicle);
    } catch (err) {
      return res
        .status(400)
        .send({ message: `${err} - erro ao pesquisar veículo.` });
    }
  };

  static addVeiculo = async (req: Request, res: Response) => {
    try {
      const newVehicle: HydratedDocument<IVeiculo> = new veiculos(req.body);

      await verifyIfVehicleAlreadyExists(newVehicle);
      await newVehicle.save();
      await addToVeiculosArrayOnEstablisment(newVehicle);
      updateVagasOcupadas(newVehicle);

      return res.status(201).send({ vehicle: newVehicle });
    } catch (err) {
      return res
        .status(401)
        .send({ message: `${err} - falha ao registrar veículo.` });
    }
  };

  static updateVeiculo = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      await veiculos.findByIdAndUpdate(id, { $set: req.body });
      return res.status(200).send("Veículo atualizado com sucesso.");
    } catch (err) {
      return res
        .status(401)
        .send({ message: `${err} - falha ao atualizar veículo.` });
    }
  };

  static deleteVeiculo = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      await veiculos.findByIdAndDelete(id);
      return res.status(200).send({ message: "Veículo deletado com sucesso." });
    } catch (err) {
      return res
        .status(500)
        .send({ message: `${err} - falha ao deletar veículo.` });
    }
  };
}

export default VeiculoController;
