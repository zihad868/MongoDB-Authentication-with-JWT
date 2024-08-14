const InformationModel = require("../Models/UserInformation");


const getInformation = async(req, res) => {
    try{
        const information = await InformationModel.find();

        res.status(200)
           .json({
              message: 'Information Received Successful',
              success: true,
              data: information
           })
    }
    catch(error){
        console.log(error);
        res.status(500)
           .json({
              message: 'Internal Server Error',
              success: false
           })
    }
}

module.exports = getInformation;