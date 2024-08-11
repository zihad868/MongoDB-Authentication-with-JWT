const { signup } = require('../Controllers/AuthControllers');
const { signupValidation } = require('../Middlewares/AuthMiddlewares');

const router = require('express').Router();

router.post('/signup', signupValidation, signup)

router.post('/login', (req, res) => {
    res.send("Login Success")
})


module.exports = router;