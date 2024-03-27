const express = require('express');

const produtosController = require("../controllers/controller_produto");

const router = express.Router();

router.get("/", produtosController.listarTodos);
router.get("/:produtoId", produtosController.buscarPeloId);
router.post("/", produtosController.validarDados, produtosController.criar);
router.put("/:produtoId", produtosController.validarDados, produtosController.atualizar);
router.delete("/:produtoId", produtosController.remover);

module.exports = router;