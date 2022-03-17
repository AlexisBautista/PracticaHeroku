const mongoose = require('mongoose');
const {Schema} = mongoose;

const CardSchema = new Schema({
  tipo: {type: String, require: true},
  generacion: {type: String, require: true}
});

module.exports = mongoose.model('card', CardSchema);