const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Hello world')
    
})
app.listen(5500, () => console.log('listening on port 5500...'))
