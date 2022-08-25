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
Object.defineProperty(exports, "__esModule", { value: true });
const veiculoRepository_1 = require("../repositories/veiculoRepository");
const veiculoServices_1 = require("../services/veiculoServices");
class VeiculoController {
    listVeiculos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const vehicles = yield veiculoRepository_1.VeiculoRepository.getAllVehicles();
                return res.status(200).json(vehicles);
            }
            catch (err) {
                return res
                    .status(400)
                    .send({ message: `${err} - Erro ao carregar veículos.` });
            }
        });
    }
    listVeiculoById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const vehicle = yield veiculoRepository_1.VeiculoRepository.getVehicleById(id);
                return res.status(200).json(vehicle);
            }
            catch (err) {
                return res
                    .status(400)
                    .send({ message: `${err} - erro ao pesquisar veículo.` });
            }
        });
    }
    addVeiculo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const veiculoServices = new veiculoServices_1.VeiculoServices();
            try {
                const newVehicle = req.body;
                yield veiculoServices.addVehicle(newVehicle);
                return res.status(201).send({ vehicle: newVehicle });
            }
            catch (err) {
                return res
                    .status(401)
                    .send({ message: `${err} - falha ao registrar veículo.` });
            }
        });
    }
    updateVeiculo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                yield veiculoRepository_1.VeiculoRepository.getVehicleByIdAndUpdate(id, { $set: req.body });
                return res.status(200).send("Veículo atualizado com sucesso.");
            }
            catch (err) {
                return res
                    .status(401)
                    .send({ message: `${err} - falha ao atualizar veículo.` });
            }
        });
    }
    deleteVeiculo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const veiculoServices = new veiculoServices_1.VeiculoServices();
            try {
                const id = req.params.id;
                const vehicle = yield veiculoRepository_1.VeiculoRepository.getVehicleById(id);
                if (vehicle) {
                    yield veiculoServices.deleteVehicle(vehicle);
                }
                return res.status(200).send({ message: "Veículo deletado com sucesso." });
            }
            catch (err) {
                return res
                    .status(500)
                    .send({ message: `${err} - falha ao deletar veículo.` });
            }
        });
    }
}
exports.default = new VeiculoController();
