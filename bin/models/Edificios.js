const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EdificiosSchema = new Schema({
    nombre:String,
    ubicacion:String

});


var Edificios = mongoose.model("Edificios", EdificiosSchema);
module.exports = Edificios;