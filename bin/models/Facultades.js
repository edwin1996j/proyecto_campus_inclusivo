const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FacultadesSchema = new Schema({
    nombre:String,
    ubicacion:String

});


var Facultades = mongoose.model("Facultades", FacultadesSchema);
module.exports = Facultades;