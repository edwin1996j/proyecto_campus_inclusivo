const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DiscapacidadSchema = new Schema({
    nombre:String,
    tipo:String

});


var Discapacidad = mongoose.model("Discapacidades", DiscapacidadSchema);
module.exports = Discapacidad;