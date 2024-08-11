const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = Schema({
    name: {
        typeof: String,
        required: True,
    },
    email: {
        typeof: String,
        required: True,
        unique: True,
    },
    password: {
        typeof: String,
        required: True,
    }
})

const UserModel = mongoose.model('users', UserSchema);
export default UserModel;