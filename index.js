const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const moviesRouter = require('./routers/movies.router');

const app = express();
const port = 3003;

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send("Binevenido a Peliculas API") 
});

app.use(compression());

app.use(express.json({ limit: '50mb' }));

app.use('/movies', moviesRouter);

app.listen(port, () => {
    console.log("Peliculas API iniciado en http://localhost:"+port);
});