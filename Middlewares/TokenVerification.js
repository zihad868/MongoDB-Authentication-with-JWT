const jwt = require('jsonwebtoken');

const ensureAuthentication = (req, res, next) => {
    const auth = req.headers['authentication'];

    if(!auth){
        return res.status(403)
              .json({message: 'JWT token is required', success: false})
    }

    try{
        const decoded = jwt.verify(auth, process.env.JWT_SECRET)
        req.user = decoded
        next()
    }
    catch(error){
        res.status({
            message: 'JWT token wrong or Expire',
            success: false
        })
    }
}

module.exports = ensureAuthentication;