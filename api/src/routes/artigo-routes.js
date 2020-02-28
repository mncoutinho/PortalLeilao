'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/artigo-controller');
router.get('/', controller.get);
router.get('/:id', controller.getbyId);
router.post('/', controller.post);
router.put('/',controller.put);
router.delete('/', controller.delete);

module.exports = router;