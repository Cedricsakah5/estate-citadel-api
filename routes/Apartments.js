const apartmentController = require('../controllers/apartmentsController')
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', apartmentController.getAllApartments);
router.post('/', apartmentController.createApartment);
router.put('/:id', apartmentController.updateApartment);
router.delete('/:id', apartmentController.deleteApartment);
router.get('/:id', apartmentController.getApartmentById);


module.exports = router;
