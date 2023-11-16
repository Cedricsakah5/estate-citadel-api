

const mongoose = require('mongoose');
const user = require('./routes/Users');
const property = require('./routes/Properties')
const Apartment = require('./routes/Apartments');
const Rental = require('./routes/Rental')
const auth = require('./routes/auth')
const express = require('express');

const app = express();

app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/estate-citadel')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...',err));

app.use('/api/users', user);
app.use('/api/properties', property);
app.use('/api/apartments', Apartment);
app.use('/api/rentals', Rental);
app.use('/api/auth',auth)

app.listen(3000, () => console.log('listening on port 3000...'));

