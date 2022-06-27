import express from "express";
import VeiculoController from "../controllers/veiculoController";

const router = express.Router();

router.get("/veiculos", VeiculoController.listVeiculos);
router.get("/veiculos/:id", VeiculoController.listVeiculoById);
router.post("/veiculos", VeiculoController.addVeiculo);
router.put("/veiculos/:id", VeiculoController.updateVeiculo);
router.delete("/veiculos/:id", VeiculoController.deleteVeiculo);

export default router;
