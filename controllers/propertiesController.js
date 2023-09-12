const {Property, validate} = require('../models/property');


getAllProperties = async (req, res) => {
    const properties = await Property.find().sort('name');
    res.send(properties);
  };
  
  creatProperty = async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
   
    const {description, name,location,ownerId, image } = req.body
    let user = new Property({ name, description, location, ownerId, image });
    console.log(req.body)
    user = await user.save();
    
    res.send(user);
  };

  updateProperty = async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    const {description, name,location,ownerId , image} = req.body
    const property = await Property.findByIdAndUpdate(req.params.id, {description, name, location, ownerId, image }, {
      new: true
    });
  
    if (!property) return res.status(404).send('The property with the given ID was not found.');
    
    res.send(property);
  };

  deleteProperty = async (req, res) => {
    const property = await Property.findByIdAndRemove(req.params.id);
  
    if (!property) return res.status(404).send('The property with the given ID was not found.');
  
    res.send(property);
  };

  getPropertyById = async (req, res) => {
    const property = await Property.findById(req.params.id);
  
    if (!property) return res.status(404).send('The property with the given ID was not found.');
  
    res.send(property);
  };

  module.exports = {getAllProperties, creatProperty, updateProperty,deleteProperty, getPropertyById}
