const Movie = require('../models/movie.model');

exports.getMovies = async(req, res) => {
    try{
        const movies = await Movie.find();
        return res.status(200).json(
            {
                message: 'Consulta de Peliculas',
                data: movies
            }
        );
    }catch(error){
        return res.status(500).json(
            {
                message: 'Error al consultar Peliculas',
                data: error
            }
        );
    }
}

exports.getMovieById = async(req, res) => {
    const movieId = req.params.movieId;
    try{
        const movie = await Movie.findById(movieId);
        return res.status(200).json(
            {
                message: 'Consulta de Peliculas por ID:' + movieId,
                data: movie
            }
        );
    }catch(error){
        return res.status(500).json(
            {
                message: 'Error al consultar Pelicula',
                data: error
            }
        );
    }
}

exports.newMovie = async(req, res) => {
    try {
        const{titulo,autor,duracion,genero,descripcion,anioEstreno} = req.body;
        const newMovie = new Movie({
            titulo,
            autor,
            duracion,
            genero,
            descripcion,
            anioEstreno
        });
        await newMovie.save();
        return res.status(200).json(
            {
                message: 'Pelicula Creada',
                data: newMovie
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: 'Error al Crear Pelicula',
                data: error
            }
        );
    }
}

exports.updateMovie = async(req, res) => {
    const movieId = req.params.movieId;
    const newData = req.body;
    try {
        const updateMovie = await Movie.findByIdAndUpdate(movieId, newData, {new: true});
        return res.status(200).json(
            {
                message: 'Pelicula Actualizada por ID:' + movieId,
                data: updateMovie
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: 'Error al Actualizar Pelicula',
                data: error
            }
        );
    }
}

exports.deleteMovie = async(req, res) => {
    const movieId = req.params.movieId;
    try {
        await Movie.findByIdAndDelete(movieId);
        return res.status(200).json(
            {
                message: 'Pelicula Eliminada por ID:' + movieId
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: 'Error al Eliminar Pelicula',
                data: error
            }
        );
    }
}