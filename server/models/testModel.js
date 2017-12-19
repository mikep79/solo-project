var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var testSchema = new Schema({
  name: String,
  event: String
});


module.exports = mongoose.model('test', testSchema);