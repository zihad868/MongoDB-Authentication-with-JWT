const information = require('../Controllers/InformationControllers');
const getInformation = require('../Controllers/getInformation');
const informationValidation = require('../Middlewares/InformationValidation');

const router = require('express').Router();

router.post('/information', informationValidation, information);
router.get('/information', getInformation);

module.exports = router;