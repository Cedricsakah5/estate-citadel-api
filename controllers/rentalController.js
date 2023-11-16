const {Rental, validate} = require('../models/rental');

getAllRentals = async (req, res) => {
    const rentals = await Rental.find().sort('startDate');
    res.send(rentals); 
}

createRental = async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
    const { userId,apartmentId,startDate,endDate,fee} = req.body
    let rental = new Rental({ userId,apartmentId,startDate,endDate,fee});
    rental = await rental.save();
    
    res.send(rental);
  };

  UpdateRental = async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
    const {userId,apartmentId,startDate,endDate,fee } = req.body
    const rental = await Rental.findByIdAndUpdate(req.params.id, {userId,apartmentId,startDate,endDate,fee}, {
      new: true
    });
  
    if (!rental) return res.status(404).send('The rental with the given ID was not found.');
    
    res.send(rental);
  };

  deleteRental =  async (req, res) => {
    const rental = await Rental.findByIdAndRemove(req.params.id);
  
    if (!rental) return res.status(404).send('The rental with the given ID was not found.');
  
    res.send(rental);
  };

  getRentalById = async (req, res) => {
    const rental = await Rental.findById(req.params.id);
  
    if (!rental) return res.status(404).send('The rental with the given ID was not found.');
  
    res.send(rental);
  };

 module.exports = {getAllRentals, createRental, UpdateRental,deleteRental, getRentalById}