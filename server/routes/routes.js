const { Router } = require('express');
const router = Router();
const { listar, registrar } = require('../controllers/controller');

router.get('/listar', listar)

router.post('/registrar', registrar);

module.exports = router;