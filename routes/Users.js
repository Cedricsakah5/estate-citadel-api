const usersController = require('../controllers/usersController')
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.get('/', usersController.getAllUsers);
router.post('/', usersController.postAUser);
router.put('/:id', usersController.putAUser);
router.delete('/:id', usersController.deleteAUser);
router.get('/:id', usersController.getAUser);

module.exports = router;
