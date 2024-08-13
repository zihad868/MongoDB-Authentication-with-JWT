const { string, number } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InformationSchema = new Schema({
    address: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    zipCode: {
        type: Number,
        required: true
    }
})

const InformationModel = mongoose.model('UserInformation', InformationSchema);
module.exports = InformationModel;