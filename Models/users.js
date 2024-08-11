const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true, // This field is required
    },
    email: {
        type: String,
        required: true, // This field is required
        unique: true, // Ensures email is unique in the collection
    },
    password: {
        type: String,
        required: true, // This field is required
    }
});


// const UserModel = mongoose.model('Users', UserSchema);
// module.export = UserModel;

const UserModel = mongoose.model('Users', UserSchema);
module.exports = UserModel;
