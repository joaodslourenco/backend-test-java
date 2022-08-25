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
exports.EstabelecimentoServices = void 0;
const Estabelecimento_1 = __importDefault(require("../models/Estabelecimento"));
class EstabelecimentoServices {
    static addToVeiculosArrayOnEstablishment(vehicle) {
        return __awaiter(this, void 0, void 0, function* () {
            const establishmentId = vehicle.estabelecimento;
            const vehicleId = vehicle._id.toString();
            yield Estabelecimento_1.default.findByIdAndUpdate(establishmentId, {
                $push: { veiculos: [...[vehicleId]] },
            });
        });
    }
    static deleteFromVeiculosArrayOnEstablishment(vehicle) {
        return __awaiter(this, void 0, void 0, function* () {
            const establishmentId = vehicle.estabelecimento;
            const vehicleId = vehicle._id;
            yield Estabelecimento_1.default.findByIdAndUpdate(establishmentId, {
                $pull: { veiculos: [vehicleId] },
            });
        });
    }
    static verifyParkingSpaces(newVehicle) {
        return __awaiter(this, void 0, void 0, function* () {
            const establishmentId = newVehicle.estabelecimento;
            const establishment = yield Estabelecimento_1.default.findById(establishmentId);
            const vehicleType = newVehicle.tipo;
            if ((vehicleType === "carro" &&
                (establishment === null || establishment === void 0 ? void 0 : establishment.vagasDisponiveisCarros) === 0) ||
                (vehicleType === "moto" && (establishment === null || establishment === void 0 ? void 0 : establishment.vagasDisponiveisMotos) === 0)) {
                throw Error("Não existem vagas disponíveis!");
            }
        });
    }
    static decreaseVagasDisponiveis(vehicle) {
        return __awaiter(this, void 0, void 0, function* () {
            const establishmentId = vehicle.estabelecimento;
            if (vehicle.tipo === "carro") {
                yield Estabelecimento_1.default.findByIdAndUpdate(establishmentId, {
                    $inc: { vagasDisponiveisCarros: -1 },
                });
            }
            else {
                yield Estabelecimento_1.default.findByIdAndUpdate(establishmentId, {
                    $inc: { vagasDisponiveisMotos: -1 },
                });
            }
        });
    }
    static increaseVagasDisponiveis(vehicle) {
        return __awaiter(this, void 0, void 0, function* () {
            const establishmentId = vehicle.estabelecimento;
            if (vehicle.tipo === "carro") {
                yield Estabelecimento_1.default.findByIdAndUpdate(establishmentId, {
                    $inc: { vagasDisponiveisCarros: +1 },
                });
            }
            else {
                yield Estabelecimento_1.default.findByIdAndUpdate(establishmentId, {
                    $inc: { vagasDisponiveisMotos: +1 },
                });
            }
        });
    }
}
exports.EstabelecimentoServices = EstabelecimentoServices;
