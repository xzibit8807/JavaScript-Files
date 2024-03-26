const mongoose = require("mongoose");

const CommentsSchema = new mongoose.Schema({
    text: String,

    likedList: [{
        type: mongoose.Types.ObjectId,
        ref: `User`
    }], 

    owner: {
        type: mongoose.Types.ObjectId,
        ref: `User`
    },
    game: {
        type: mongoose.Types.ObjectId,
        ref: `Catalog`
    },
    
    createdAt: Date,
    
},{timestamps: true});



CommentsSchema.pre(`save`, function(){
    if(!this.createdAt){
        this.createdAt = Date.now();
    }
})


const Comment = mongoose.model(`Catalog`, CommentsSchema);

module.exports = Comment;