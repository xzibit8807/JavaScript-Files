const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, `Title is required.`],
    },
    type: {
        type: String,
        required: [true, `Type is required.`],
        minLength: 3,
        lowercase: true,
    },
    certificate: {
        type: String,
        required: [true, `Certificate is required.`],
        minLength: [2, `Only "Yes" ore "No" required.`],
        maxLength: [3, `Only "Yes" ore "No" required.`],
    },
    imageUrl    : {
        type: String,
        required: [true, `Image is Required.`],
        match: /^https?:\/\//
    },

    description:{
        type: String,
        required: [true, `Description is required.`],
        minLength: 10,
        maxLength: 1000, 
    },

    price: [{
        type: Number,
        min: 0,
        required: [true, `Price is required.`],
    }],
    signUpList: [{
        type: mongoose.Types.ObjectId,
        ref: `User`
    }],    
    owner: {
        type: mongoose.Types.ObjectId,
        ref: `User`
    },
    createdAt: Date,
    
},{timestamps: true});
// function to sort by the latest 3 created and then to post on Home Page.. continues on homeController
courseSchema.pre(`save`, function(){
    if(!this.createdAt){
        this.createdAt = Date.now();
    }
})

const Catalog = mongoose.model(`Catalog`, courseSchema);

module.exports = Catalog;