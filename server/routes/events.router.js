var router = require('express').Router();
var dbEvents = require('../models/events.js');
var dbUsers = require('../models/user.js');

// get all events
router.get('/', function (req, res) {
    // console.log('/events route hit');
    dbEvents.find({}, function (err, results) {
        if (err) {
            console.log('db GET error: ', err);
            res.sendStatus(500);
        } else {
            // console.log('results of db GET: ', results);
            res.send(results);
        }
    });
});

// add event to user's "attend" array
router.put('/:id', function (req, res) {
    // console.log('/events route req.params: ', req.params);
    // check if user or guest. User only: 
    if (req.user !== undefined) {
        console.log('/events route username: ', req.user.username);
        // add event id to user's "attend" array
        dbUsers.updateOne({ username: req.user.username }, { $push: { attend: req.params.id } }, function (err) {
            if (err) {
                console.log('attend user array error: ', err);
                res.sendStatus(500);
            }
        });
    }
    // increment event's attending "count"
    dbEvents.updateOne({ _id: req.params.id }, { $inc: { count: 1 } }, function (err) {
        if (err) {
            console.log('update user error: ', err);
            res.sendStatus(500);
        } else {
            res.sendStatus(202);
        }
    });
});

module.exports = router;