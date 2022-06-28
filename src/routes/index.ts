import express from "express";
import veiculoRoutes from "./veiculoRoutes";
import estabelecimentoRoutes from "./estabelecimentoRoutes";

const routes = (app: express.Application) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ title: "Teste Backend FCamara" });
  });
  app.use(express.json(), veiculoRoutes, estabelecimentoRoutes);
};

export default routes;
