var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
    name: String,
    description: String,
    count: Number,
    time_start: Date,
    time_end: Date, 
    location: { name: String, street: String, city: String, state: String, zip: Number},
    access_tags: {wheelchair: Boolean, deafness: Boolean, blind: Boolean, bathroom: Boolean, attendant: Boolean, sensory: Boolean}, 
    content_tags: String
});

module.exports = mongoose.model('Events', EventSchema);