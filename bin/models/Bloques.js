const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BloquesSchema = new Schema({
    numero:String
    /*bicacion:String*/

});


var Bloques = mongoose.model("Bloques", BloquesSchema);
module.exports = Bloques;