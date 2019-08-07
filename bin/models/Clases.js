const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClasesSchema = new Schema({
    nombre:String

});


var Clases = mongoose.model("Clases", ClasesSchema);
module.exports = Clases;