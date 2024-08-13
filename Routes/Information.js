const information = require('../Controllers/InformationControllers');
const informationValidation = require('../Middlewares/InformationValidation');

const router = require('express').Router();

router.post('/information', informationValidation, information)

module.exports = router;