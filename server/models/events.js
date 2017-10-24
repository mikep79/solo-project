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
    content_tags: {games: Boolean, animals: Boolean, food: Boolean, sports: Boolean, nature: Boolean, movies: Boolean, shopping: Boolean, artsAndCrafts: Boolean, danceAndMusic: Boolean, partyAndHoliday: Boolean}
});

module.exports = mongoose.model('Events', EventSchema);