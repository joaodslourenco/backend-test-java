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
exports.increaseVagasDisponiveis = exports.decreaseVagasDisponiveis = exports.verifyParkingSpaces = exports.deleteFromVeiculosArrayOnEstablishment = exports.addToVeiculosArrayOnEstablishment = void 0;
const Estabelecimento_1 = __importDefault(require("../models/Estabelecimento"));
const addToVeiculosArrayOnEstablishment = (newVehicle) => __awaiter(void 0, void 0, void 0, function* () {
    const establishmentId = newVehicle.estabelecimento;
    const vehicleId = newVehicle._id;
    Estabelecimento_1.default.findByIdAndUpdate(establishmentId, {
        $push: { veiculos: [...[vehicleId]] },
    }, {}, (err) => {
        console.log(err);
    });
});
exports.addToVeiculosArrayOnEstablishment = addToVeiculosArrayOnEstablishment;
const deleteFromVeiculosArrayOnEstablishment = (vehicle) => __awaiter(void 0, void 0, void 0, function* () {
    const establishmentId = vehicle.estabelecimento;
    const vehicleId = vehicle._id;
    Estabelecimento_1.default.findByIdAndUpdate(establishmentId, {
        $pull: { veiculos: [{ vehicleId }] },
    }, {}, (err) => {
        console.log(err);
    });
});
exports.deleteFromVeiculosArrayOnEstablishment = deleteFromVeiculosArrayOnEstablishment;
const verifyParkingSpaces = (newVehicle) => __awaiter(void 0, void 0, void 0, function* () {
    const establishmentId = newVehicle.estabelecimento;
    const establishment = yield Estabelecimento_1.default.findById(establishmentId);
    const vehicleType = newVehicle.tipo;
    if ((vehicleType === "carro" && (establishment === null || establishment === void 0 ? void 0 : establishment.vagasDisponiveisCarros) === 0) ||
        (vehicleType === "moto" && (establishment === null || establishment === void 0 ? void 0 : establishment.vagasDisponiveisMotos) === 0)) {
        throw Error("Não existem vagas disponíveis!");
    }
    return;
});
exports.verifyParkingSpaces = verifyParkingSpaces;
const decreaseVagasDisponiveis = (vehicle) => __awaiter(void 0, void 0, void 0, function* () {
    const establishmentId = vehicle.estabelecimento;
    if (vehicle.tipo === "carro") {
        Estabelecimento_1.default.findByIdAndUpdate(establishmentId, {
            $inc: { vagasDisponiveisCarros: -1 },
        }, {}, (err) => {
            console.log(err);
        });
    }
    else {
        Estabelecimento_1.default.findByIdAndUpdate(establishmentId, {
            $inc: { vagasDisponiveisMotos: -1 },
        }, {}, (err) => {
            console.log(err);
        });
    }
});
exports.decreaseVagasDisponiveis = decreaseVagasDisponiveis;
const increaseVagasDisponiveis = (vehicle) => __awaiter(void 0, void 0, void 0, function* () {
    const establishmentId = vehicle.estabelecimento;
    if (vehicle.tipo === "carro") {
        Estabelecimento_1.default.findByIdAndUpdate(establishmentId, {
            $inc: { vagasDisponiveisCarros: +1 },
        }, {}, (err) => {
            console.log(err);
        });
    }
    else {
        Estabelecimento_1.default.findByIdAndUpdate(establishmentId, {
            $inc: { vagasDisponiveisMotos: +1 },
        }, {}, (err) => {
            console.log(err);
        });
    }
});
exports.increaseVagasDisponiveis = increaseVagasDisponiveis;
