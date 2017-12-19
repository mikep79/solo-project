process.env.NODE_ENV = 'test';
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/server.js');
var should = chai.should();
var mongoose = require('mongoose');
var EventsTest = require("../server/models/events");

// for testing http requests
chai.use(chaiHttp);

describe('Events', function () {
    EventsTest.collection.drop();
    beforeEach(function (done) {
        var newEvent = new EventsTest({
            'name': 'String',
            'description': 'String',
            'count': 'Number',
            'time_start': null,
            'time_end': 'null',
            'location': { 'name': 'String', 'street': 'String', 'city': 'String', 'state': 'String', 'zip': 55555 },
            'access_tags': { 'wheelchair': false, 'deafness': false, 'blind': false, 'bathroom': false, 'attendant': false, 'sensory': false },
            'content_tags': { 'games': false, 'animals': false, 'food': false, 'sports': false, 'nature': false, 'movies': false, 'shopping': false, 'artsAndCrafts': false, 'danceAndMusic': false, 'partyAndHoliday': false }
        });
        newEvent.save(function (err) {
            done();
        });
    });
    afterEach(function (done) {
        EventsTest.collection.drop();
        done();
    });
    it('should list all events in /events GET call', function (done) {
        chai.request(server)
            .get('/events')
            .end(function (err, res) {
                console.log('get test res.body:', res.body);
                res.should.have.status(200);
                done();
            })
    });
    it('should add an event on /create POST call', function (done) {
        chai.request(server)
            .post('/create')
            .send({
                'name': 'String',
                'description': 'String',
                'count': '1',
                'time_start': null,
                'time_end': null,
                'location': { 'name': 'String', 'street': 'String', 'city': 'String', 'state': 'MN', 'zip': '55555' },
                'access_tags': { 'wheelchair': false, 'deafness': false, 'blind': false, 'bathroom': false, 'attendant': false, 'sensory': false },
                'content_tags': { 'games': false, 'animals': false, 'food': false, 'sports': false, 'nature': false, 'movies': false, 'shopping': false, 'artsAndCrafts': false, 'danceAndMusic': false, 'partyAndHoliday': false }
            })
            .end(function (err, res) {
                console.log('POST test res.body: ', res.body);
                res.should.have.status(202);
                done();
            })
    });
});

// templates:

// it('should list ALL blobs on /blobs GET', function(done) {
//     chai.request(server)
//       .get('/blobs')
//       .end(function(err, res){
//         res.should.have.status(200);
//         done();
//       });
//   });

// var chai = require('chai');
// var chaiHttp = require('chai-http');
// var server = require('../server/app');
// var should = chai.should();

// chai.use(chaiHttp);

// describe('Blobs', function () {
//     it('should list ALL blobs on /blobs GET');
//     it('should list a SINGLE blob on /blob/<id> GET');
//     it('should add a SINGLE blob on /blobs POST');
//     it('should update a SINGLE blob on /blob/<id> PUT');
//     it('should delete a SINGLE blob on /blob/<id> DELETE');
// });