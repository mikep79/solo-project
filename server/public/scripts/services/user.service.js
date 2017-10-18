myApp.factory('UserService', function ($http, $location) {
  // console.log('UserService Loaded');

  var userObject = {};
  var eventsObject = {
    data: []
  };
  var testObj = { 
    username: "e" ,
    events: { 
      name: "thing11", description: "thing11desc", location: { name: 'Somewhere!', street: '202 9th St', city: 'Mapleton', state: 'MN', zip: '11111'}, time_start: "2014-01-17T15:00:00Z", time_end: "2014-01-17T16:00:00Z", count: null, access_tags: ['blindness', 'ramp'], content_tags: ['movies']
    }
  };

  return {
    userObject: userObject,
    eventsObject: eventsObject,

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

    // get all events
    getEvents: function () {
      $http.get('/events').then(function (res) {
        console.log('response from server: ', res);

        // loop through each user
        for (var i = 0; i < res.data.length; i++) {
          // if statement to remove users with no "events" array
          if (res.data[i].events) {
            // loop through user[i]'s event objects
            for (var j = 0; j < res.data[i].events.length; j++) {
              var newItem = res.data[i].events[j];
              // push each event object to async. array
              eventsObject.data.push(newItem);
            }
          }
        }

      });
    },

    // post new event
    createEvent: function(){
      // console.log('createEvent service func called');
      $http.put('/create', testObj).then(function (res){
        console.log('PUT response from server: ', res);
      });
    }

  };
});
