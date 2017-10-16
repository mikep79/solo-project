var router = require('express').Router();

var dbEvents = require('../models/user.js');

router.get('/', function(req, res){
    console.log('/events route hit');
    dbEvents.find({}, function(err, results){
        if (err){
            console.log('db GET error: ', err);
            res.sendStatus(500);
        } else {
            console.log('results of db GET: ', results);
            res.send(results);         
        }
    });
});

module.exports = router;