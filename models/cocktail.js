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
    },
    cocktail: {
        type: String, 
        required: true
    },
    cocktailId: {
        type: String, 
        required: true
    },
    instructions: {
        type: String, 
        required: true
    },
    recipe1: {
        type: String,
        default: null
    },
    recipe2: {
        type: String,
        default: null
    },
    recipe3: {
        type: String,
        default: null
    },
    recipe4: {
        type: String,
        default: null
    },
    recipe5: {
        type: String,
        default: null
    },
    favorites: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    comments: [commentSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Cocktail', cocktailSchema);