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
exports.VeiculoRepository = void 0;
const Veiculo_1 = __importDefault(require("../models/Veiculo"));
class VeiculoRepository {
    static getAllVehicles() {
        return __awaiter(this, void 0, void 0, function* () {
            return Veiculo_1.default.find().populate("estabelecimento", ["nome", "endereco"]);
        });
    }
    static getVehicleById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return Veiculo_1.default
                .findById(id)
                .populate("estabelecimento", ["nome", "endereco"]);
        });
    }
    static getOneVehicle(vehicle) {
        return __awaiter(this, void 0, void 0, function* () {
            return Veiculo_1.default.findOne({
                estabelecimento: vehicle.estabelecimento,
                placa: vehicle.placa,
            });
        });
    }
    static getVehicleByIdAndUpdate(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return Veiculo_1.default.findByIdAndUpdate(id, data);
        });
    }
    static deleteVehicle(vehicle) {
        return __awaiter(this, void 0, void 0, function* () {
            vehicle.delete();
        });
    }
}
exports.VeiculoRepository = VeiculoRepository;
