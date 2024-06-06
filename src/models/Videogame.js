const mongoose = require('mongoose');
const { Schema } = mongoose;

const videogameSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    releaseYear: {
        type: Number,
        required: true,
    },
});

const Videogame = mongoose.model('Videogame', videogameSchema);
module.exports = Videogame;
