myApp.controller('MyEventsController', function(UserService){
    // console.log('MyEventsController loaded');
    var vm = this;
    vm.UserService = UserService;

    vm.getMyEvents = function(){
        // UserService.getEvents();
    };

    vm.deleteEvent = function(){
        // console.log('delete event func called');
        vm.UserService.deleteEvent();
    };
});