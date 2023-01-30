const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        require: 'A title is required'
    },

    director: {
        type: String,
        require: 'director is required'
    },
    stars: {
        type: [String]
    },
    image:{
        type: String,
    },
    description:{
        type: String
    },
    showtimes:{
        type: [String]
    }

});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;