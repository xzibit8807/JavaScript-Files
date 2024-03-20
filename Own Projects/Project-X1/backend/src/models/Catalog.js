const mongoose = require("mongoose");

const StoneSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, `Name is required.`],
        minLength: [2, `Min length of Name is 2 Characters.`],
    },
    category: {
        type: String,
        required: [true, `Category is required.`],
        lowercase: true,
        minLength: [3, `Min length of Category is 3 Characters.`],
    },
    color: {
        type: String,
        required: [true, `Color is required.`],
        minLength: [2, `Min length of Color is 2 Characters.`],
  
    },
    imageUrl: {
        type: String,
        required: [true, `Image is Required.`],
        match: /^https?:\/\//
    },

    location: {
        type: String,
        required: [true, `Location is required.`],
        minLength: [5, `Min length of Location is 5 Characters.`],
        maxLength: [15, `Max length of Location is 15 Characters.`],
    },

    formula:{
        type: String,
        required: [true, `Formula is required.`],
        minLength: [3, `Min length of Formula is 3 Characters.`],
        maxLength: [30, `Max length of Formula is 30 Characters.`],
    },

    description:{
        type: String,
        required: [true, `Description is required.`],
        minLength: [10, `Min length of Description is 10 Characters.`],
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



StoneSchema.pre(`save`, function(){
    if(!this.createdAt){
        this.createdAt = Date.now();
    }
})


const Catalog = mongoose.model(`Catalog`, StoneSchema);

module.exports = Catalog;