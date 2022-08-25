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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VeiculoServices = void 0;
const Veiculo_1 = __importDefault(require("../models/Veiculo"));
const veiculoRepository_1 = require("../repositories/veiculoRepository");
const estabelecimentoServices_1 = require("./estabelecimentoServices");
class VeiculoServices {
    constructor() { }
    verifyIfVehicleAlreadyExists(vehicle) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingVehicle = yield veiculoRepository_1.VeiculoRepository.getOneVehicle(vehicle);
            if (existingVehicle) {
                throw new Error("Veículo já foi cadastrado!");
            }
        });
    }
    addVehicle(vehicle) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.verifyIfVehicleAlreadyExists(vehicle);
                yield estabelecimentoServices_1.EstabelecimentoServices.verifyParkingSpaces(vehicle);
                const newVehicle = new Veiculo_1.default(vehicle);
                yield newVehicle.save();
                yield estabelecimentoServices_1.EstabelecimentoServices.addToVeiculosArrayOnEstablishment(newVehicle);
                yield estabelecimentoServices_1.EstabelecimentoServices.decreaseVagasDisponiveis(newVehicle);
                return vehicle;
            }
            catch (error) {
                throw new Error(`Erro ao adicionar veículo: ${error}`);
            }
        });
    }
    deleteVehicle(vehicle) {
        return __awaiter(this, void 0, void 0, function* () {
            yield estabelecimentoServices_1.EstabelecimentoServices.increaseVagasDisponiveis(vehicle);
            yield estabelecimentoServices_1.EstabelecimentoServices.deleteFromVeiculosArrayOnEstablishment(vehicle);
            yield veiculoRepository_1.VeiculoRepository.deleteVehicle(vehicle);
        });
    }
}
exports.VeiculoServices = VeiculoServices;
