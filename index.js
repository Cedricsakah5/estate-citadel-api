

const mongoose = require('mongoose');
const user = require('./routes/Users');
//const property = require('./routes/Properties')
const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Hello world')
    
})

app.listen(3000, () => console.log('listening on port 3000...'));
