"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const veiculoRoutes_1 = __importDefault(require("./veiculoRoutes"));
const estabelecimentoRoutes_1 = __importDefault(require("./estabelecimentoRoutes"));
const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({ title: "Teste Backend FCamara" });
    });
    app.use(express_1.default.json(), veiculoRoutes_1.default, estabelecimentoRoutes_1.default);
};
exports.default = routes;
