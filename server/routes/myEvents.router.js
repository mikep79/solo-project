var router = require('express').Router();
var dbEvents = require('../models/user.js');

// get all user's events
router.post('/', function(req, res){
    console.log('router POST req hit with req body:', req.body);
    dbEvents.find({username: req.body.userName }, {events: 1, _id: 0 }, function(err, result){
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
    var un = req.body.username;
    var deleteObj = req.body.eventObj;
    dbEvents.update({ username : un }, {$pull : { "events" : { deleteObj } } }, function(err){
        if (err){
            console.log('delete event error: ', err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});

module.exports = router;