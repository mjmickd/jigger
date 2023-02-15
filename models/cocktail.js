const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content:{
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 3
    },
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

const cocktailSchema = new Schema({
    image: {
        type: String,
        required: true,
        //check API for this
    },
    cocktail: {
        type: String, 
        required: true
    },
    recipe: {
        type: String,
        required: true
        //check API for this 
    },
    comments: [commentSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Cocktail', cocktailSchema);