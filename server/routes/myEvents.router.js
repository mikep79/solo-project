var router = require('express').Router();
var dbUsers = require('../models/user.js');
var dbEvents = require('../models/events.js');

// get user's attending events
router.get('/', function (req, res) {
    // console.log('Create route hit with req username: ', req.user.username);
    dbUsers.find({ username: req.user.username }, { attend: 1, _id: 0 }, function (err, result) {
        if (err) {
            console.log('get myEvents GET error: ', err);
            res.sendStatus(500);
        } else {
            // push results to array that mongo can convert to ObjectIds
            var resultArray = result[0].attend.split(",");
            // console.log('resultArray: ', resultArray);
            // if no events in attending array, send empty array back and halt find query.
            if (resultArray == '') {
                console.log('No events in attending array.');
                res.send(resultArray);
            } else {
                // find events matching array of _ids. Duplicates filtered.
                dbEvents.find({ _id: { $in: resultArray } }, function (error, filterResults) {
                    if (error) {
                        console.log('myEvents filter error: ', error);
                        res.sendStatus(500);
                    } else {
                        // console.log('results array:  ', result);
                        // console.log('filter results: ', filterResults);
                        res.send(filterResults);
                    }
                });
            }
        }
    });
});

// remove event from user's attending events array
router.put('/:id', function (req, res) {
    // console.log('/myEvents route req.params: ', req.params);
    // check if user or guest. User only: 
    if (req.user !== undefined) {
        console.log('/myEvents route username: ', req.user.username);
        dbUsers.updateOne({ username: req.user.username }, { $pull: { attend: req.params.id } }, function (err) {
            if (err) {
                console.log('remove attend user array error: ', err);
                res.sendStatus(500);
            }
        });
    }
    // decrement event's attending "count"
    dbEvents.updateOne({ _id: req.params.id }, { $inc: { count: -1 } }, function (err) {
        if (err) {
            console.log('update user error: ', err);
            res.sendStatus(500);
        } else {
            res.sendStatus(202);
        }
    });
});

module.exports = router;