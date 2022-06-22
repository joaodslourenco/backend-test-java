import express from "express";
import veiculoRoutes from "./veiculoRoutes";

const routes = (app: express.Application) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ title: "Teste Backend FCamara" });
  });
  app.use(express.json(), veiculoRoutes);
};

export default routes;
