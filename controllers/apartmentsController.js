const auth = require('../middleware/auth')
const {Apartment, validate} = require('../models/apartment');

getAllApartments = async (req, res) => {
    const apartments = await Apartment.find().sort(typeof 'available' == true);
    res.send(apartments);
}

createApartment = auth,async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
    const {propertyId,apartmentNumber,available} = req.body
    let apartment = new Apartment({ propertyId,apartmentNumber,available });
    apartment = await apartment.save();
    
    res.send(apartment);
  };

  updateApartment = auth,async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
    const {propertyId,apartmentNumber,available} = req.body
    const apartment = await Apartment.findByIdAndUpdate(req.params.id, {propertyId,apartmentNumber,available}, {
      new: true
    });
  
    if (!apartment) return res.status(404).send('The apartment with the given ID was not found.');
    
    res.send(apartment);
  };

  deleteApartment = auth, async (req, res) => {
    const apartment = await Apartment.findByIdAndRemove(req.params.id);
  
    if (!apartment) return res.status(404).send('The apartment with the given ID was not found.');
  
    res.send(apartment);
  };

  getApartmentById = async (req, res) => {
    const apartment = await Apartment.findById(req.params.id);
  
    if (!apartment) return res.status(404).send('The apartment with the given ID was not found.');
  
    res.send(apartment);
  };

 module.exports = {getAllApartments, createApartment, updateApartment,deleteApartment, getApartmentById}