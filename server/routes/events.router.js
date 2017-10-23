var router = require('express').Router();

var dbEvents = require('../models/user.js');

router.get('/', function(req, res){
    console.log('/events route hit');
    // send events from db query, filter out auto user id
    dbEvents.find( {}, {events: 1, _id: 0 }, function(err, results){
        if (err){
            console.log('db GET error: ', err);
            res.sendStatus(500);
        } else {
            console.log('results of db GET: ', results);
            res.send(results);
        }
    });
});

router.put('/', function(req, res){
    // console.log('Create route hit with req username: ', req.user.username);
    var b = req.body;
    
    dbEvents.updateOne({ username: b.username }, { events: b.events }, function(err){
        if (err){
            console.log('update user error: ', err);
            res.sendStatus(500);
        } else {
            res.sendStatus(202);
        }
    });
});

module.exports = router;