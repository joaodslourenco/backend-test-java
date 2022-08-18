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
const Estabelecimento_1 = __importDefault(require("../models/Estabelecimento"));
class EstabelecimentoController {
}
_a = EstabelecimentoController;
EstabelecimentoController.listEstabelecimentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const establishment = yield Estabelecimento_1.default.find().populate("veiculos");
        return res.status(200).json(establishment);
    }
    catch (err) {
        return res
            .status(400)
            .send({ message: `${err} - Erro ao carregar estabelecimentos.` });
    }
});
EstabelecimentoController.listEstabelecimentoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const establishment = yield Estabelecimento_1.default
            .findById(id)
            .populate("veiculos");
        return res.status(200).send(establishment);
    }
    catch (err) {
        return res
            .status(400)
            .send({ message: `${err} - erro ao pesquisar estabelecimento.` });
    }
});
EstabelecimentoController.addEstabelecimento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newEstabelecimento = new Estabelecimento_1.default(req.body);
        yield newEstabelecimento.save();
        return res.status(201).send({ establishment: newEstabelecimento });
    }
    catch (err) {
        return res
            .status(401)
            .send({ message: `${err} - falha ao registrar estabelecimento.` });
    }
});
EstabelecimentoController.updateEstabelecimento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield Estabelecimento_1.default.findByIdAndUpdate(id, { $set: req.body });
        return res.status(200).send("Estabelecimento atualizado com sucesso.");
    }
    catch (err) {
        return res
            .status(401)
            .send({ message: `${err} - falha ao atualizar estabelecimento.` });
    }
});
EstabelecimentoController.deleteEstabelecimento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield Estabelecimento_1.default.findByIdAndDelete(id);
        return res
            .status(200)
            .send({ message: "Estabelecimento deletado com sucesso." });
    }
    catch (err) {
        return res
            .status(500)
            .send({ message: `${err} - falha ao deletar estabelecimento.` });
    }
});
exports.default = EstabelecimentoController;
