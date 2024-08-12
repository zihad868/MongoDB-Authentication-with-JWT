const { signup, login } = require('../Controllers/AuthControllers');
const { signupValidation, loginValidation } = require('../Middlewares/AuthMiddlewares');

const router = require('express').Router();

router.post('/signup', signupValidation, signup)
router.post('/login', loginValidation, login)

module.exports = router;