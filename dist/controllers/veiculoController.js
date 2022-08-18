"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const Veiculo_1 = __importDefault(require("../models/Veiculo"));
const estabelecimentoServices_1 = require("../services/estabelecimentoServices");
const veiculoServices_1 = require("../services/veiculoServices");
class VeiculoController {
}
_a = VeiculoController;
VeiculoController.listVeiculos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const vehicles = yield Veiculo_1.default
            .find()
            .populate("estabelecimento", ["nome", "endereco"]);
        return res.status(200).json(vehicles);
    }
    catch (err) {
        return res
            .status(400)
            .send({ message: `${err} - Erro ao carregar veículos.` });
    }
});
VeiculoController.listVeiculoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const vehicle = yield Veiculo_1.default
            .findById(id)
            .populate("estabelecimento", ["nome", "endereco"]);
        return res.status(200).send(vehicle);
    }
    catch (err) {
        return res
            .status(400)
            .send({ message: `${err} - erro ao pesquisar veículo.` });
    }
});
VeiculoController.addVeiculo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newVehicle = new Veiculo_1.default(req.body);
        yield (0, veiculoServices_1.verifyIfVehicleAlreadyExists)(newVehicle);
        yield (0, estabelecimentoServices_1.verifyParkingSpaces)(newVehicle);
        yield newVehicle.save();
        yield (0, estabelecimentoServices_1.addToVeiculosArrayOnEstablishment)(newVehicle);
        (0, estabelecimentoServices_1.decreaseVagasDisponiveis)(newVehicle);
        return res.status(201).send({ vehicle: newVehicle });
    }
    catch (err) {
        return res
            .status(401)
            .send({ message: `${err} - falha ao registrar veículo.` });
    }
});
VeiculoController.updateVeiculo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield Veiculo_1.default.findByIdAndUpdate(id, { $set: req.body });
        return res.status(200).send("Veículo atualizado com sucesso.");
    }
    catch (err) {
        return res
            .status(401)
            .send({ message: `${err} - falha ao atualizar veículo.` });
    }
});
VeiculoController.deleteVeiculo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const vehicle = yield Veiculo_1.default.findById(id);
        if (vehicle) {
            yield (0, estabelecimentoServices_1.increaseVagasDisponiveis)(vehicle);
            yield (0, estabelecimentoServices_1.deleteFromVeiculosArrayOnEstablishment)(vehicle);
            vehicle.delete();
        }
        return res.status(200).send({ message: "Veículo deletado com sucesso." });
    }
    catch (err) {
        return res
            .status(500)
            .send({ message: `${err} - falha ao deletar veículo.` });
    }
});
exports.default = VeiculoController;
