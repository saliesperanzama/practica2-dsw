exports.getMovies = (req, res) => {
    try{
        return res.status(200).json(
            {
                message: 'Consulta de Peliculas'
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

exports.getMovieById = (req, res) => {
    try{
        const movieId = req.params.movieId;
        return res.status(200).json(
            {
                message: 'Consulta de Peliculas por ID:' + movieId
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

exports.newMovie = (req, res) => {
    try {
        const newMovie = req.body;
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

exports.updateMovie = (req, res) => {
    try {
        const movieId = req.params.movieId;
        const updateMovie = req.body;
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

exports.deleteMovie = (req, res) => {
    try {
        const movieId = req.params.movieId;
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