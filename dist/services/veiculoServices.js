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
exports.verifyIfVehicleAlreadyExists = void 0;
const Veiculo_1 = __importDefault(require("../models/Veiculo"));
const verifyIfVehicleAlreadyExists = (newVehicle) => __awaiter(void 0, void 0, void 0, function* () {
    const existingVehicle = yield Veiculo_1.default.findOne({
        estabelecimento: newVehicle.estabelecimento,
        placa: newVehicle.placa,
    });
    if (existingVehicle)
        throw Error("Veículo já foi cadastrado!");
    return;
});
exports.verifyIfVehicleAlreadyExists = verifyIfVehicleAlreadyExists;
