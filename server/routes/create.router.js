var router = require('express').Router();

var dbEvents = require('../models/user.js');

router.put('/', function(req, res){
    console.log('Create route hit with req body: ', req.body);
    console.log('dbEvents: ', dbEvents);
    
    dbEvents.updateOne({ username: "d" }, { $push: { events: { name: "thing10", description: "thing10desc", location: { name: 'Somewhere!', street: '202 9th St', city: 'Mapleton', state: 'MN', zip: '11111'}, time_start: "2014-01-17T15:00:00Z", time_end: "2014-01-17T16:00:00Z", count: null, access_tags: ['blindness', 'ramp'], content_tags: ['movies']  } } }, function(err, response){
        if (err){
            console.log('update user error: ', err);
            res.sendStatus(500);
        } else {
            res.sendStatus(202);
        }
    });
});

module.exports = router;