import express from "express";
import EstabelecimentoController from "../controllers/estabelecimentoController";

const router = express.Router();

router.get("/estabelecimentos", EstabelecimentoController.listEstabelecimentos);
router.get(
  "/estabelecimentos/:id",
  EstabelecimentoController.listEstabelecimentoById,
);
router.post("/estabelecimentos", EstabelecimentoController.addEstabelecimento);
router.put(
  "/estabelecimentos/:id",
  EstabelecimentoController.updateEstabelecimento,
);
router.delete(
  "/estabelecimentos/:id",
  EstabelecimentoController.deleteEstabelecimento,
);

export default router;
