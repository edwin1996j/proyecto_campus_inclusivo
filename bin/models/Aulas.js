const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AulasSchema = new Schema({
    nombre:String,
    tipo:String

});


var Aulas = mongoose.model("Aulas", AulasSchema);
module.exports = Aulas;