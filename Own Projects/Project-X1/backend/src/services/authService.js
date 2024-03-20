const User = require(`../models/User`);
const bcrypt = require(`bcrypt`)
const jwt = require(`../lib/jwt`);
const { SECRET } = require(`../config/config`)


exports.register = async (userData) => {
    const user = await User.findOne({email: userData.email});
    if(user){
        throw new Error(`Wrong Email ore it may already exist !`);
    }

    if(!userData.email){
        throw new Error(`Email is required !`);
    }
    if(!userData.password){
        throw new Error(`Password is required ! Try again !`)   
    }
    if(userData.password !== userData.rePassword){
        throw new Error(`Password and rePassword dose not match ! Try again !`)
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!userData.email.match(emailRegex)){
        throw new Error(`Wrong Email ore it may already exist !`)
    } 
    const createdUser = await User.create(userData);
    const token = await generateToken(createdUser);
    return token;
}

exports.login = async (email, password) => {
    
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Email or password is invalid !');
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        throw new Error('Email or password is invalid !');
    }

    const token = await generateToken(user);

    return token;
}

function generateToken(user){
    const payload = {
        _id: user._id,
        user: user.username,
        email: user.email,
    };

   return jwt.sign(payload, SECRET, { expiresIn: '2h' });
}