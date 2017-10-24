myApp.factory('UserService', function ($http, $location) {
  // console.log('UserService Loaded');

  var userObject = {};
  // object containing ALL events
  var eventsObject = {
    data: []
  };
  var myEventsObject = {
    data: []
  };
  var myAttendingEvents = {
    data: []
  };

  return {
    userObject: userObject,
    eventsObject: eventsObject,
    myEventsObject: myEventsObject,
    myAttendingEvents: myAttendingEvents,

    // called in client.js when /user url hit (login)
    getuser: function () {
      console.log('UserService -- getuser');
      $http.get('/user').then(function (response) {
        if (response.data.username) {
          // user has a curret session on the server
          userObject.userName = response.data.username;
          console.log('UserService -- getuser -- User Data: ', userObject.userName);
        } else {
          console.log('UserService -- getuser -- failure');
          // user has no session, bounce them back to the login page
          $location.path("/home");
        }
      }, function (response) {
        console.log('UserService -- getuser -- failure: ', response);
        $location.path("/home");
      });
    },

    // called directly on DOM
    logout: function () {
      // console.log('UserService -- logout');
      $http.get('/user/logout').then(function (response) {
        // console.log('UserService -- logout -- logged out');
        $location.path("/home");
      });
    },

    // TWO COLLECTIONS: get all events
    getEvents: function () {
      $http.get('/events').then(function (res) {
        console.log('response from server: ', res);
        eventsObject.data = res.data;
      });
    },

    // post new event
    createEvent: function(eventObj){
      // console.log('createEvent service func called');
      var eventObj = {
        // only add event object for now
        // username: userObject.userName,
        events: eventObj
      };
      // $http.put('/create', eventObj).then(function (res){
      //   // console.log('PUT response from server: ', res);
      // });
      $http.post('/create', eventObj).then(function (res){
        console.log('POST response from server: ', res);
      });
    },

    // get user's created Events
    // getMyEvents: function(){
    //   // console.log('myEvents POST req for my events');
    //   $http.post('/myEvents', userObject).then(function(res){
    //     console.log('Res from getMyEvents call: ', res);
    //     myEventsObject.data = res.data[0].events;
    //     console.log('myEvents Obj array : ', myEventsObject.data);        
    //   });
    // },

    // get attending events
    getAttendingEvents: function(){
      $http.get('/myEvents').then(function(res){
        console.log('myEvents attending res: ', res);
        myAttendingEvents.data = res.data;
      });
    },

    // delete event
    deleteEvent: function(event){
      // console.log('delete service call');
      var deleteObj = {
        username: userObject.userName,
        eventObj: event
      }
      $http.put('/myEvents', deleteObj).then(function(res){
        console.log('res from delete call: ', res);
      });
    },

    addCount: function(eventId){
      console.log('add to event count');
      $http.put('/events/' + eventId).then(function(res){
        console.log('response from addCount call: ', res);
      });
    }

  };
});
