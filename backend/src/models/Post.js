const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    author: String,
    place: String,
    descriptio: String,
    hashtags: String,
    image: String,
    likes: {
        type: Number,
        default: 0,
    }
},{
    timestamps: true,
});

module.exports = mongoose.model('Post', PostSchema);