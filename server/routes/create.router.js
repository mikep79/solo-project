var router = require('express').Router();

var dbEvents = require('../models/user.js');

router.put('/', function(req, res){
    console.log('Create route hit with req body: ', req.body);
    // req.body variables
    var b = req.body;
    var be = req.body.events;
    var bel = req.body.events.location;
    
    // console.log('req.body vars: ', b.username, be.name, be.description, bel.name, bel.street, bel.city, bel.state, bel.zip, be.time_start, be.time_end, be.count, be.access_tags, be.content_tags);
    
    dbEvents.updateOne({ username: b.username }, { $push: { events: { name: be.name, description: be.description, location: { name: bel.name, street: bel.street, city: bel.city, state: bel.state, zip: bel.zip }, time_start: be.time_start, time_end: be.time_end, count: be.count, access_tags: be.access_tags, content_tags: be.content_tags } } }, function(err){
        if (err){
            console.log('update user error: ', err);
            res.sendStatus(500);
        } else {
            res.sendStatus(202);
        }
    });

    // dbEvents.updateOne({ username: "d" }, { $push: { events: { name: "thing10", description: "thing10desc", location: { name: 'Somewhere!', street: '202 9th St', city: 'Mapleton', state: 'MN', zip: '11111'}, time_start: "2014-01-17T15:00:00Z", time_end: "2014-01-17T16:00:00Z", count: null, access_tags: ['blindness', 'ramp'], content_tags: ['movies']  } } }, function(err, response){
    //     if (err){
    //         console.log('update user error: ', err);
    //         res.sendStatus(500);
    //     } else {
    //         res.sendStatus(202);
    //     }
    // });
});

module.exports = router;