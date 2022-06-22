import express from "express";
import VeiculoController from "../controllers/veiculoController";

const router = express.Router();

router.get("/veiculos", VeiculoController.listVeiculos);
router.post("/veiculos", VeiculoController.addVeiculo);

export default router;
