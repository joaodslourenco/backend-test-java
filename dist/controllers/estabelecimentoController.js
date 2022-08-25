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
const estabelecimentoRepository_1 = require("../repositories/estabelecimentoRepository");
class EstabelecimentoController {
    listEstabelecimentos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const establishmentList = yield estabelecimentoRepository_1.EstabelecimentoRepository.getEstabelecimentosList();
                return res.status(200).json(establishmentList);
            }
            catch (err) {
                return res
                    .status(400)
                    .send({ message: `${err} - Erro ao carregar estabelecimentos.` });
            }
        });
    }
    listEstabelecimentoById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const establishment = yield estabelecimentoRepository_1.EstabelecimentoRepository.getEstabelecimentoById(id);
                return res.status(200).send(establishment);
            }
            catch (err) {
                return res
                    .status(400)
                    .send({ message: `${err} - erro ao pesquisar estabelecimento.` });
            }
        });
    }
    addEstabelecimento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const estabelecimento = req.body;
                yield estabelecimentoRepository_1.EstabelecimentoRepository.addEstabelecimento(estabelecimento);
                return res.status(201).send({ establishment: estabelecimento });
            }
            catch (err) {
                return res
                    .status(401)
                    .send({ message: `${err} - falha ao registrar estabelecimento.` });
            }
        });
    }
    updateEstabelecimento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                yield estabelecimentoRepository_1.EstabelecimentoRepository.getEstabelecimentoByIdAndUpdate(id, {
                    $set: req.body,
                });
                return res.status(200).send("Estabelecimento atualizado com sucesso.");
            }
            catch (err) {
                return res
                    .status(401)
                    .send({ message: `${err} - falha ao atualizar estabelecimento.` });
            }
        });
    }
    deleteEstabelecimento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                yield estabelecimentoRepository_1.EstabelecimentoRepository.getEstabelecimentoByIdAndDelete(id);
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
    }
}
exports.default = new EstabelecimentoController();
