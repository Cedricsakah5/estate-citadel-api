const authController = require('../controllers/authContoller')
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', authController.createUser);

module.exports = router;

