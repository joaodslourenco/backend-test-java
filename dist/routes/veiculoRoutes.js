"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const veiculoController_1 = __importDefault(require("../controllers/veiculoController"));
const router = express_1.default.Router();
router.get("/veiculos", veiculoController_1.default.listVeiculos);
router.get("/veiculos/:id", veiculoController_1.default.listVeiculoById);
router.post("/veiculos", veiculoController_1.default.addVeiculo);
router.put("/veiculos/:id", veiculoController_1.default.updateVeiculo);
router.delete("/veiculos/:id", veiculoController_1.default.deleteVeiculo);
exports.default = router;
