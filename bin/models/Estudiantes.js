const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EstudianteSchema = new Schema({
    nombre1:String,
    nombre2:String,
    apellido1:String,
    apellido2:String,
    direccion:String,
    telefono:Number

});


var Estudiante = mongoose.model("Estudiantes", EstudianteSchema);
module.exports = Estudiante;