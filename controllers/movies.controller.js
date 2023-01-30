const Movie = require('../models/movies.model');

module.exports.list = (req, res, next) => {
    Movie.find()
        .then((movies) => {
            console.log(movies);
        })
        .catch((error) => next(error));

}