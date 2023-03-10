const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: { type: String, unique: true },
    age: Number,
    password: String
})
const usuarioModel = mongoose.model('usuarios', usuarioSchema)

module.exports = usuarioModel;