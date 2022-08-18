"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const estabelecimentoController_1 = __importDefault(require("../controllers/estabelecimentoController"));
const router = express_1.default.Router();
router.get("/estabelecimentos", estabelecimentoController_1.default.listEstabelecimentos);
router.get("/estabelecimentos/:id", estabelecimentoController_1.default.listEstabelecimentoById);
router.post("/estabelecimentos", estabelecimentoController_1.default.addEstabelecimento);
router.put("/estabelecimentos/:id", estabelecimentoController_1.default.updateEstabelecimento);
router.delete("/estabelecimentos/:id", estabelecimentoController_1.default.deleteEstabelecimento);
exports.default = router;
