const express = require ('express');
const router = express.Router();

const contasPagarController = require('../controllers/contasPagarControllers');

router.get('/contasPagar', contasPagarController.index);
router.get('/contasPagar/listar', contasPagarController.listAll);
router.get('/contasPagar/listar/:codigo', contasPagarController.listById);
router.get('/contasPagar/empresa/listar/:codigo', contasPagarController.listByCompany);

module.exports = router;