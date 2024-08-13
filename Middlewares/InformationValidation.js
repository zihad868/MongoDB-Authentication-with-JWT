const Joi = require('joi')

const informationValidation = (req, res, next) => {
    const schema = Joi.object({
        address: Joi.string().min(3).max(200).required(),
        contact: Joi.number().min(4).max(14).required(),
        zipCode: Joi.number().min(4).max(6).required()
    })

    const {error} = schema.validate(req.body);

    if(error){
        return res.status(400)
                 .json({message: 'Bad Request', error})
    }
    next()
}


module.exports = informationValidation;