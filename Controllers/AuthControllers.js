const UserModel = require('../Models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                message: 'User already exists, You can login',
                success: false,
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({
            message: 'Signup Success',
            success: true,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Internal Server Error',
            success: false,
        });
    }
};



const login = async(req, res) => {
    try{
        const {name, email, password} = req.body;
        const user = await UserModel.findOne({ email });
        const errorMessage = 'Auth failed user name or password is wrong';

        if(!user){
            return res.status(403)
               .json({message: errorMessage, success: false})
        }

        const isPasswordEqual = await bcrypt.compare(password, user.password);
        if(!isPasswordEqual){
            return res.status(403)
                .json({message: errorMessage, success: false})
        }

        const jwtToken = jwt.sign(
            {email: user.email, _id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: '24h'}
        )

        res.status(200)
           .json({
              message: 'Login Success',
              success: true,
              jwtToken,
              email,
              name: user.name
           })
    }
    catch(err){
        console.log(err)
        res.status(500)
           .json({message: 'Internal Server Error', success: false})
    }
}

module.exports = {
    signup,
    login
}