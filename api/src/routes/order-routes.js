'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/order-controller');
router.get('/order', controller.get);
router.get('/order/:id', controller.getbyId);
router.post('/order/', controller.post);
router.put('/order/',controller.put);
router.delete('/order/', controller.delete);
module.exports = router;