const { signup } = require('../Controllers/AuthControllers');
const { signupValidation } = require('../Middlewares/AuthMiddlewares');

const router = require('express').Router();

router.post('/login', (req, res) => {
    res.send("Login Success")
})

router.post('/signup', signupValidation, signup)

module.exports = router;