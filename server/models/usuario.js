const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El email es necesario']
    },
    kilometros: {
        type: Number,
        required: [true, 'El número de kilómetros es necesario']
    }
});

usuarioSchema.plugin(uniqueValidator, {
    message: '{PATH} debe de ser único'
});


module.exports = mongoose.model('Usuario', usuarioSchema);