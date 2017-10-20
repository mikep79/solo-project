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

router.delete('/', function(req, res){
    console.log('router delete req hit with req body:', req.body);
    
});

module.exports = router;