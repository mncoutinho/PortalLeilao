'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/user-controller');
router.get('/leilao', controller.get);
router.get('/leilao/:id', controller.getbyId);
router.post('/leilao/', controller.post);
router.put('/leilao/',controller.put);
router.delete('/leilao/', controller.delete);

module.exports = router;