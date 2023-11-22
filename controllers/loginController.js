const validate = require('../models/login')
const jwt =require('jsonwebtoken');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const {User, } = require('../models/user');

exports.login = async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
    let user = await User.findOne({email: req.body.email});
  
    if (!user) return res.status(400).send('invalid email or password.');
    
    const validPasssword = await bcrypt.compare(req.body.password, user.password);
   if (!validPasssword) return res.status(4001).send('Unauthorized access');
     
   token = jwt.sign(
    {
      _id: user.id,
      name: user.name,
      phone: user.phone,
      userType: user.userType
    },
    'estateCitadel'
  )
    res.send(token);
  };
 
  

  