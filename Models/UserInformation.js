const { string, number } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InformationSchema = new Schema({
    Address: {
        type: string,
        require: true
    },
    contact: {
        type: number,
        require: true
    },
    zipCode: {
        type: number,
        require: true
    }
})

const InformationModel = mongoose.model('UserInformation', InformationSchema);
module.exports = InformationModel;