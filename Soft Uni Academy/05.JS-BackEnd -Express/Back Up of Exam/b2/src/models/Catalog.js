const mongoose = require("mongoose");

const StoneSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, `Name is required.`],
    },
    category: {
        type: String,
        required: [true, `Category is required.`],
        lowercase: true,
    },
    color: {
        type: String,
        required: [true, `Color is required.`],
  
    },
    imageUrl: {
        type: String,
        required: [true, `Image is Required.`],
        match: /^https?:\/\//
    },

    location: {
        type: String,
        required: [true, `Location is required.`]
    },

    formula:{
        type: String,
        required: [true, `Formula is required.`]
    },

    description:{
        type: String,
        required: [true, `Description is required.`],
        minLength: 2,
        maxLength: 1000, 
    },

    likedList: [{
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
StoneSchema.pre(`save`, function(){
    if(!this.createdAt){
        this.createdAt = Date.now();
    }
})

const Catalog = mongoose.model(`Catalog`, StoneSchema);

module.exports = Catalog;