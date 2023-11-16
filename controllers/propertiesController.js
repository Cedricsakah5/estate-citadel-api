const {Property, validate} = require('../models/property');
const formidable = require('formidable')
const fs = require('fs')

getAllProperties = async (req, res) => {
    const properties = await Property.find().sort('createdAt');
    res.send(properties);
  };

createProperty = (req, res, next) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        message: "Image could not be uploaded",
      });
    }

    const body={name:fields.name[0], description:fields.description[0],
    location:fields.location[0],ownerId:fields.ownerId[0],date:fields.date[0]}
    const { error } = validate(body); 
    if (error) return res.status(400).send(error.details[0].message);
    let property = new Property({ ...body});
    if (files.image) {
      property.image.data = fs.readFileSync(files.image[0].filepath);
      property.image.contentType = files.image[0].mimetype;
    }
    try {
        property = await property.save();
      res.status(200).send(property);
    } catch (err) {
      return res.status(400)
    }
  });
};


  updateProperty = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        message: "Photo could not be uploaded",
      });
    }
      
    const body={name:fields.name[0], description:fields.description[0],
      location:fields.location[0],ownerId:fields.ownerId[0],date:fields.date[0]}
      const { error } = validate(body); 
      let property = await Property.findByIdAndUpdate(req.params.id, {...body }, {  new: true
      });
      property.updated = Date.now();
      if (error) return res.status(400).send(error.details[0].message);
        property = new Property({ ...body});
      if (files.image) {
        property.image.data = fs.readFileSync(files.image[0].filepath);
        property.image.contentType = files.image[0].mimetype;
      }
      try {
        res.status(200).send(property);
      } catch (err) {
        return res.status(400).send('The property with the given ID was not found.');
    
      }
    });
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

  module.exports = {getAllProperties, createProperty, updateProperty,deleteProperty, getPropertyById}

