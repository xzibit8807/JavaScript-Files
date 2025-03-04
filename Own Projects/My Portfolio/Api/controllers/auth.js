const jwt = require('../lib/jwt');
const config = require('../config/config'); 

const userModel = require('../models/userModel')
const tokenBlacklistModel = require('../models/tokenBlacklistModel')

// const {
//     userModel,
//     tokenBlacklistModel
// } = require('../models');

// const utils = require('../lib');
const { authCookieName } = require('../app-config');
const { emit } = require('nodemon');

const bsonToJson = (data) => { return JSON.parse(JSON.stringify(data)) };
const removePassword = (data) => {
    const { password, __v, ...userData } = data;
    return userData
}

function register(req, res, next) {
    const { email,name, password, confirmPassword } = req.body;
    return userModel.create({ email, name, password })
        .then((createdUser) => {
            createdUser = bsonToJson(createdUser);
            createdUser = removePassword(createdUser);

            const token = jwt.createToken({ id: createdUser._id });
            if (process.env.NODE_ENV === 'production') {
                res.cookie(authCookieName, token, { httpOnly: true, sameSite: 'none', secure: true })
            } else {
                res.cookie(authCookieName, token, { httpOnly: true })
            }
            res.status(200)
                .send(createdUser);
        })
        .catch(err => {
            if (err.name === 'MongoError' && err.code === 11000) {
                let field = err.message.split("index: ")[1];
                field = field.split(" dup key")[0];
                field = field.substring(0, field.lastIndexOf("_"));

                res.status(409)
                    .send({ message: `This ${field} is already registered!` });
                return;
            }
            next(err);
        });
}


function login(req, res, next) {
    const { email, password } = req.body;

    userModel.findOne({ email })
        .then(user => {
            return Promise.all([user, user ? user.matchPassword(password) : false]);
        })
        .then(([user, match]) => {
            if (!match) {
                res.status(401)
                    .send({ message: 'Wrong email or password' });
                return
            }
            user = bsonToJson(user);
            user = removePassword(user);

            const token = jwt.createToken({ userId: user._id, email: user.email }, config.jwtSecret, { expiresIn: '1h' }); //  id: user._id

            if (process.env.NODE_ENV === 'production') {
                res.cookie(authCookieName, token, { httpOnly: true, sameSite: 'none', secure: true })
            } else {
                res.cookie(authCookieName, token, { httpOnly: true })
            }
            // res.status(200).json({ token });  //new added token
            res.status(200)
                .send(user);
        })
        .catch(next);
}

// function login(req, res, next) {
//     const { email, password } = req.body;
// console.log(emil, password + "comes to backend");
//     userModel.findOne({ email })
//         .then(user => {
//             if (!user) {
//                 res.status(401).send({ message: 'Wrong email or password' });
//                 return;
//             }

//             user.matchPassword(password)
//                 .then(match => {
//                     if (!match) {
//                         res.status(401).send({ message: 'Wrong email or password' });
//                         return;
//                     }

//                     // Authentication successful
//                     user = bsonToJson(user);
//                     user = removePassword(user);

//                     const token = utils.jwt.createToken({ id: user._id });
//                     console.log("this is token ", token);

//                     if (process.env.NODE_ENV === 'production') {
//                         res.cookie(authCookieName, token, { httpOnly: true, sameSite: 'none', secure: true });
//                     } else {
//                         res.cookie(authCookieName, token, { httpOnly: true });
//                     }

//                     res.status(200).send(user);
//                 })
//                     .catch(next); // Handle bcrypt.compare error
//         })
//         .catch(next); // Handle userModel.findOne error
// }


// function login(req, res, next) {
//     const { email, password } = req.body;

//     console.log("Login request body:", req.body);

//     userModel.findOne({ email })
//         .then(user => {
//             return Promise.all([user, user ? user.matchPassword(password) : false]);
//         })
//         .then(([user, match]) => {
//             if (!match) {
//                 res.status(401)
//                     .send({ message: 'Wrong email or password' });
//                 return
//             }
//             user = bsonToJson(user);
//             user = removePassword(user);

//             const token = utils.jwt.createToken({ id: user._id });

//             if (process.env.NODE_ENV === 'production') {
//                 res.cookie(authCookieName, token, { httpOnly: true, sameSite: 'none', secure: true })
//             } else {
//                 res.cookie(authCookieName, token, { httpOnly: true })
//             }
//             res.status(200)
//                 .send(user);
//         })
//         .catch(next);
// }


// function login(req, res, next) {
//     const { email, password } = req.body;

//     userModel.findOne({ email })
//         .then(user => {
//             return Promise.all([user, user ? user.matchPassword(password) : false]);
//         })
//         .then(([user, match]) => {
//             if (!match) {
//                 res.status(401)
//                     .send({ message: 'Wrong email or password' });
//                 return
//             }
//             user = bsonToJson(user);
//             user = removePassword(user);

//             const token = utils.jwt.createToken({ id: user._id });

//             if (process.env.NODE_ENV === 'production') {
//                 res.cookie(authCookieName, token, { httpOnly: true, sameSite: 'none', secure: true })
//             } else {
//                 res.cookie(authCookieName, token, { httpOnly: true })
//             }
//             res.status(200)
//                 .send(user);
//         })
//         .catch(next);
// }

function logout(req, res) {
    const token = req.cookies[authCookieName];

    tokenBlacklistModel.create({ token })
        .then(() => {
            res.clearCookie(authCookieName)
            .clearCookie(`sessionId`)
                .status(204)
                .send({ message: 'Logged out!' });
        })
        .catch(err => res.send(err));
}

function getProfileInfo(req, res, next) {
    const { _id: userId } = req.user;

    userModel.findOne({ _id: userId }, { password: 0, __v: 0 }) //finding by Id and returning without password and __v
        .then(user => { res.status(200).json(user) })
        .catch(next);
}

function editProfileInfo(req, res, next) {
    const { _id: userId } = req.user;
    const { tel, username, email } = req.body;

    userModel.findOneAndUpdate({ _id: userId }, { tel, username, email }, { runValidators: true, new: true })
        .then(x => { res.status(200).json(x) })
        .catch(next);
}

module.exports = {
    login,
    register,
    logout,
    getProfileInfo,
    editProfileInfo,
}
