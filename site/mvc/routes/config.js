// Importa função do express para criar rotas
const { Router } = require("express");

// Importa o controller do usuário para ter acesso às funções de cadastro, listagem e deleção de usuários
const InteressadosController = require("../controllers/InteressadosController");

// Cria uma instância do roteador do express
const router = Router();

// Interessados
router.get("/", (req, res) => InteressadosController.index(req, res));
router.get("/api/formulario", (req, res) => InteressadosController.interessadosCriar(req, res));
router.post("/api/formulario", (req, res) => InteressadosController.interessadosPostAsync(req, res));
router.get("/api/lista", (req, res) => InteressadosController.interessadosListar(req, res));
router.delete("/api/deletar/:id", (req, res) => InteressadosController.interessadoDeletar(req, res));

module.exports = router;
