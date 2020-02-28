'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/user-controller');
router.get('/user', controller.get);
router.get('/user/:id', controller.getbyId);
router.post('/user/', controller.post);
router.put('/user/',controller.put);
router.delete('/user/', controller.delete);

module.exports = router;