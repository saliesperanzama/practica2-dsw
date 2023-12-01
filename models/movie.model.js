const mongose = require('mongoose');

let movieSchema = new mongose.Schema({
    titulo: {type:String},
    autor: {type:String},
    duracion: {type:Number},
    genero: {type:String},
    descripcion: {type:String},
    anioEstreno: {type:Number}
});

module.exports = mongose.model('Movie', movieSchema, 'movie');