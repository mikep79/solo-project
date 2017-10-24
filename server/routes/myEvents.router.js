var router = require('express').Router();
var dbUsers = require('../models/user.js');
var dbEvents = require('../models/events.js');

// get all user's events
// router.post('/', function(req, res){
//     console.log('Create route hit with req username: ', req.user.username);
//     // console.log('router POST req hit with req body:', req.body);
//     // was using username from body: req.body.userName
//     dbEvents.find({username: req.user.username }, {events: 1, _id: 0 }, function(err, result){
//         if (err){
//             console.log('get myEvents POST error: ', err);
//             res.sendStatus(500);
//         } else {
//             res.send(result);
//         }
//     });
// });

// get user's attending events
router.get('/', function(req, res){
    console.log('Create route hit with req username: ', req.user.username);
    // was using username from body: req.body.userName
    dbUsers.find({username: req.user.username }, {attend: 1, _id: 0 }, function(err, result){
        if (err){
            console.log('get myEvents GET error: ', err);
            res.sendStatus(500);
        } else {
            // push results to array that mongo can convert to ObjectIds
            var resultArray = result[0].attend.split(",");
            // console.log('resultArray: ', resultArray);
            // find events matching array of _ids. Duplicates filtered.
            dbEvents.find( { _id: { $in: resultArray } }, function(error, filterResults){
                if (error){
                    console.log('myEvents filter error: ', error);
                    res.sendStatus(500);
                } else {
                    // console.log('results array:  ', result);
                    // console.log('filter results: ', filterResults);
                    res.send(filterResults);
                }
            });
        }
    });
});

// delete event from user's events array
router.put('/', function(req, res){
    // console.log('router delete req hit with req body:', req.body);
    var deleteObj = req.body.eventObj;
    dbUsers.updateOne({ username : req.user.username }, {$pull : { "events" : { name: deleteObj.name, time_start: deleteObj.time_start } } }, function(err){
        if (err){
            console.log('delete event error: ', err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});

module.exports = router;