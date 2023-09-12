const propertiesController = require('../controllers/propertiesController')
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', propertiesController.getAllProperties);
router.post('/', propertiesController.creatProperty);
router.put('/:id', propertiesController.updateProperty);
router.delete('/:id', propertiesController.deleteProperty);
router.get('/:id', propertiesController.getPropertyById);


module.exports = router;
