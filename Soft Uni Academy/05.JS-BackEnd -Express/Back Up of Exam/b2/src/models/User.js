const mongoose = require("mongoose");
const bcrypt = require(`bcrypt`);

const { schema, model, MongooseError } = require(`mongoose`);

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: [true,`Email is required.`],
        lowercase: true,
        unique: true,
        minlength: 5,
        regex: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, `Wrong Email ore it may already exist !`],
    },
    password: {
        type: String,
        required: [true,`Password is required.`],
        minlength: [4, `Min length of the Password is 4 characters.`]
    },
    createdStoneCatalogs: [{
        type: mongoose.Types.ObjectId,
        ref: `Catalog`
    }],
    likedStones: [{
        type: mongoose.Types.ObjectId,
        ref: `Catalog`
    }]

});

userSchema.pre(`save`, async function () {

    this.password = await bcrypt.hash(this.password, 12);

});

//checking the RePass
userSchema.virtual(`rePassword`)
    .set(function (value) {
        if (value !== this.password) {
            throw new MongooseError(`Password dose not match !`);
        }
    });

const User = model(`User`, userSchema);

module.exports = User;
