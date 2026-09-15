// Importa função do express para criar rotas
const { Router } = require("express");

// Importa o controller do usuário para ter acesso às funções de cadastro, listagem e deleção de usuários
const InteressadosController = require("../controllers/InteressadosController");

// Cria uma instância do roteador do express
const router = Router();

// Interessados
router.get("/", (req, res) => InteressadosController.index(req, res));
router.get("/formulario", (req, res) => InteressadosController.interessadosCriar(req, res));
router.post("/formulario", (req, res) => InteressadosController.interessadosPostAsync(req, res));

module.exports = router;
