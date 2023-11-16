const jwt =require('jsonwebtoken');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const {User, } = require('../models/user');

exports.createUser = async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
    let user = await User.findOne({name: req.body.name});
  
    if (!user) return res.status(400).send('invalid name or password.');
    
    const validPsaaword = await bcrypt.compare(req.body.password, user.password);
   if (!validPsaaword) return res.status(400).send('invalid name or password.');
     
   token = jwt.sign({_id: user.id}, 'estateCitadel')
    res.send(token);
  };
 

  function validate(req) {
    const schema = Joi.object().keys({
      name: Joi.string().min(3).max(250).required(),
       password: Joi.string().min(6).max(250).required()
    });
    return schema.validate(req);
  }