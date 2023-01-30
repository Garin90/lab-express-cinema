const Movie = require('../models/movies.model');

module.exports.list = (req, res, next) => {
    Movie.find()
        .then((movies) => {
            //console.log(movies);
            res.render('movies/list', {movies})
        })
        .catch((error) => next(error));

}

module.exports.detail = (req, res, next) => {
    Movie.findById(req.params.id)
        .then((movie) => {
            res.render('movies/detail', {movie:movie})

        })
}