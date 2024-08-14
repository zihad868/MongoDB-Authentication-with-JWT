const information = require('../Controllers/InformationControllers');
const getInformation = require('../Controllers/getInformation');
const informationValidation = require('../Middlewares/InformationValidation');
const verifyToken = require('../Middlewares/TokenVerification');

const router = require('express').Router();

router.post('/information', informationValidation, information);
router.get('/information',verifyToken, getInformation);

module.exports = router;