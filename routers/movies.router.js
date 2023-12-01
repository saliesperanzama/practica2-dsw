const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/movies.controller');
const authMiddleware = require('../utils/auth.middleware');

router.get('/', moviesController.getMovies);
router.get('/:movieId', moviesController.getMovieById);

//Crear con auth authMiddleware.authenticateToken,
router.post('/', authMiddleware.authenticateToken, moviesController.newMovie);

//Actualizar libro con auth
router.put('/:movieId', authMiddleware.authenticateToken, moviesController.updateMovie);
router.delete('/:movieId', authMiddleware.authenticateToken, moviesController.deleteMovie);

module.exports = router;