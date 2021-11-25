const express = require ('express');
const router = express.Router();
const empresaController = require('../controllers/empresaControllers')

router.get('/empresa', empresaController.index);
router.get('/empresa/listar', empresaController.listAll);
router.get('/empresa/listar/:codigo', empresaController.listById);
router.post('/empresa/', empresaController.create);
router.delete('/empresa/:codigo', empresaController.destroy);
router.put('/empresa/:codigo', empresaController.update);

module.exports = router;