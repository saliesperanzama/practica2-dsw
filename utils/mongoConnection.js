const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://root:pasale123@cluster0.kdc7n5g.mongodb.net/pelicula-db?retryWrites=true&w=majority').then(
    ()=>console.log('Conexion exitosa')).catch(err=>console.error('Error al conectar', err))

module.exports = mongoose;