myApp.factory('UserService', function ($http, $location) {
  // console.log('UserService Loaded');

  var userObject = {};
  var eventsObject = {
    data: []
  };
  var testObj = { 
    key: 'value'
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
      $http.put('/create').then(function (res){
        console.log('PUT response from server: ', res);
      });
    }

  };
});
