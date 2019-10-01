const { Schema, model } = require('mongoose');

// Set the developer object schema
const DevSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    bio: String, // not required
    avatar: {
        type: String,
        required: true
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
},{
    timestamps: true
    // Enable the mongoose to manage the 
    // createdAt and the updated At
});

// Exports the module
module.exports = model('Dev', DevSchema);

// INDEX, SHOW, STORE, UPDATE, DELETE 