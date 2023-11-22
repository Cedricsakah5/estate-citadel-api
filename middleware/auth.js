const jwt = require('jsonwebtoken')

module.exports = function (req,res, next){
    const token = req.header('x-auth-token')
    if(!token) return res.status(401).send('Acess denied, no token provied.')
   
    try {
     const decodedToken = jwt.verify('estateCitadel')
     req.user = decodedToken
     next();
    }
  catch (ex){
    res.status(400).send('Invalid token')
  }
   
}
