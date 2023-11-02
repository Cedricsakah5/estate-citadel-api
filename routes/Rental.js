const rentalController = require('../controllers/rentalController')
const express = require('express');
const router = express.Router();

router.get('/', rentalController.getAllRentals);
router.post('/', rentalController.createRental);
router.put('/:id', rentalController.UpdateRental);
router.delete('/:id', rentalController.deleteRental);
router.get('/:id', rentalController.getRentalById);


module.exports = router;
