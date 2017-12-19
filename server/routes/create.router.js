var router = require('express').Router();

// var dbUsers = require('../models/user.js');
var dbEvents = require('../models/events.js');

router.post('/', function(req, res){
    console.log('Create route hit with req username: ', req.user.username);
    console.log('Create route hit with req.body.events: ', req.body.events);
    var eventObj = req.body.events;
    var newEvent = new dbEvents(
        eventObj
    );
    newEvent.save(function(err){
        if (err){
            console.log('update user error: ', err);
            res.sendStatus(500);
        } else {
            res.sendStatus(202);
        }
    });
});

module.exports = router;