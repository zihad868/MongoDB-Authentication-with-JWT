const { default: UserModel } = require("../Models/users");
const bcrypt = require('bcrypt');


const signup = async(req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({ email });

        if (user) {
            return res.status(409)
                .json({ message: 'User already exists, You can login', success: false });
        }

        const userModel = new UserModel({ name, email, password });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();

        res.status(201)
            .json({
                message: 'Signup Success',
                success: true
            });
    } catch (err) {
        console.error(err);  // Logs the error to the console
        res.status(500)
            .json({
                message: 'Internal Server Error',
                success: false
            });
    }
};


const login = async(req, res) => {
    try{

    }
    catch(err){

    }
}

module.exports = {
    signup,
    login
}