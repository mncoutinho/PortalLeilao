'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/artigo-controller');
router.get('/artigo/', controller.get);
router.get('/artigo/:id', controller.getbyId);
router.post('/artigo/', controller.post);
router.put('/artigo/',controller.put);
router.delete('/artigo/', controller.delete);

module.exports = router;