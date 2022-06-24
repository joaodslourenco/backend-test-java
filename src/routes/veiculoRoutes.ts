import express from "express";
import VeiculoController from "../controllers/veiculoController";

const router = express.Router();

router.get("/veiculos", VeiculoController.listVeiculos);
router.post("/veiculos", VeiculoController.addVeiculo);
router.put("/veiculos/:id", VeiculoController.updateVeiculo);

export default router;
