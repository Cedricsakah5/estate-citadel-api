const bcrypt = require('bcrypt');
const {User, validate} = require('../models/user');

getAllUsers = async (req, res) => {
    const users = await User.find().sort('name');
    res.send(users);
}
 
createUser = async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
    const {email, name, userType, phone, password } = req.body
    let user = new User({ email, name, userType, phone, password });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt)
    user = await user.save();
    
    res.send(user);
  };

  updateUser = async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
    const {email, name,userType, phone, password } = req.body
    const user = await User.findByIdAndUpdate(req.params.id, {email, name, userType, phone, password }, {
      new: true
    });
  
    if (!user) return res.status(404).send('The user with the given ID was not found.');
    
    res.send(user);
  };

  deleteUser =  async (req, res) => {
    const user = await User.findByIdAndRemove(req.params.id);
  
    if (!user) return res.status(404).send('The user with the given ID was not found.');
  
    res.send(user);
  };

  getUserById = async (req, res) => {
    const user = await User.findById(req.params.id);
  
    if (!user) return res.status(404).send('The user with the given ID was not found.');
  
    res.send(user);
  };

 module.exports = {getAllUsers, createUser, updateUser,deleteUser, getUserById}