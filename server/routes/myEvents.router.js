var router = require('express').Router();
var dbEvents = require('../models/user.js');

// get all user's events
router.post('/', function(req, res){
    console.log('Create route hit with req username: ', req.user.username);
    // console.log('router POST req hit with req body:', req.body);
    // was using username from body: req.body.userName
    dbEvents.find({username: req.user.username }, {events: 1, _id: 0 }, function(err, result){
        if (err){
            console.log('get myEvents POST error: ', err);
            res.sendStatus(500);
        } else {
            res.send(result);
        }
    });
});

router.put('/', function(req, res){
    // console.log('router delete req hit with req body:', req.body);
    var deleteObj = req.body.eventObj;
    dbEvents.updateOne({ username : req.user.username }, {$pull : { "events" : { name: deleteObj.name, time_start: deleteObj.time_start } } }, function(err){
        if (err){
            console.log('delete event error: ', err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});

module.exports = router;