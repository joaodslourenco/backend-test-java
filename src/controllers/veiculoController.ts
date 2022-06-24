import { Request, Response } from "express";
import { HydratedDocument } from "mongoose";
import veiculos, { IVeiculo } from "../models/Veiculo";

class VeiculoController {
  static listVeiculos = async (req: Request, res: Response) => {
    try {
      const vehicles = await veiculos.find();
      return res.status(200).json(vehicles);
    } catch (err) {
      return res
        .status(400)
        .send({ message: `${err} - Erro ao carregar veículos.` });
    }
  };

  static addVeiculo = async (req: Request, res: Response) => {
    try {
      const newVehicle: HydratedDocument<IVeiculo> = new veiculos(req.body);
      await newVehicle.save();
      return res.status(201).send({ vehicle: newVehicle });
    } catch (err) {
      return res
        .status(401)
        .send({ message: `${err} - falha ao registrar veículo.` });
    }
  };
}

export default VeiculoController;
