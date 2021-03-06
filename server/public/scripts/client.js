var myApp = angular.module('myApp', ['ngMaterial', 'ngRoute']);

/// Routes ///
myApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  // console.log('myApp -- config')
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'LoginController as lc',
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController as lc'
    })
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'UserController as uc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/create', {
      templateUrl: '/views/templates/create.html',
      controller: 'CreateController as CC',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/events', {
      templateUrl: 'views/templates/events.html',
      controller: 'EventsController as EC'
    })
    .when('/myEvents', {
      templateUrl: 'views/templates/myEvents.html',
      controller: 'MyEventsController as MEC'
    })
    .otherwise({
      redirectTo: '/home'
    })
    // use the HTML5 History API
    // $locationProvider.html5Mode(true);
});
