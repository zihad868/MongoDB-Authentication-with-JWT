const InformationModel = require("../Models/UserInformation");


const information = async(req, res) => {
    try{
        const {address, contact, zipCode} = req.body;
        const newInfo = new InformationModel({
            address, contact, zipCode
        })

        await newInfo.save();

        res.status(201).json({
            message: 'Add Info Success',
            success: true
        })
    }
    catch(error){
        console.error(error)
        res.status(500).json({
            message: 'Internal Server Error',
            success: false
        })
    }
}

module.exports = information;