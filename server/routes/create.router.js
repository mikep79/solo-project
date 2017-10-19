var router = require('express').Router();

var dbEvents = require('../models/user.js');

router.put('/', function(req, res){
    // console.log('Create route hit with req body: ', req.body);
    var b = req.body;
    
    dbEvents.updateOne({ username: b.username }, { $push: { events: b.events } }, function(err){
        if (err){
            console.log('update user error: ', err);
            res.sendStatus(500);
        } else {
            res.sendStatus(202);
        }
    });
});

module.exports = router;