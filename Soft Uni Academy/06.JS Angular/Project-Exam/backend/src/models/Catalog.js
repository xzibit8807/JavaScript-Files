const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
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
    rating: {
        type: Number,
        required: [true, `Rating is required.`],
        minLength: [1, `Number should be between 1 and 5`],
        maxLength: [1, `Number should be between 1 and 5`],
  
    },
    imageUrl: {
        type: String,
        required: [true, `Image is Required.`],
        match: /^https?:\/\//
    },

    description:{
        type: String,
        required: [true, `Description is required.`],
        minLength: [10, `Min length of Description is 10 Characters.`],
        maxLength: [1000, `Maximum length of Description is 1000 Characters.`], 
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



GameSchema.pre(`save`, function(){
    if(!this.createdAt){
        this.createdAt = Date.now();
    }
})


const Catalog = mongoose.model(`Catalog`, GameSchema);

module.exports = Catalog;