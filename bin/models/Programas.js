const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProgramaSchema = new Schema({
    nombre:String,
    ubicacion:String

});


var Programa = mongoose.model("Programa", ProgramaSchema);
module.exports = Programa;