const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const gameSchema = new mongoose.Schema({
    gameName: {
        type: String,
        required: [true, `Name is required.`],
        minLength: [2, `Min length of Name is 2 Characters.`],
    },
    gameImage: {
        type: String,
        required: [true, `Image is Required.`],
        match: /^https?:\/\//
    },
    gameType: {
        type: String,
        required: [true, `Category is required.`],
        lowercase: true,
        minLength: [3, `Min length of Category is 3 Characters.`],

    },
    gameDescription: {
        type: String,
        required: [true, `Description is required.`],
        minLength: [10, `Min length of Description is 10 Characters.`],
        maxLength: [1000, `Maximum length of Description is 1000 Characters.`], 

    },
    likedList: [{
        type: ObjectId,
        ref: "User"
    }],
    userId: {
        type: ObjectId,
        ref: "User"
    },
    comments: [{
        type: ObjectId,
        ref: "Post"
    }],
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Game', gameSchema);
