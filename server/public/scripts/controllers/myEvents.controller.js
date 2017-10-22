myApp.controller('MyEventsController', function(UserService){
    // console.log('MyEventsController loaded');
    var vm = this;
    vm.UserService = UserService;
    vm.myEvents = UserService.myEventsObject;
    // vm.eventsObj = UserService.eventsObject;   from other controller

    vm.getMyEvents = function(){
        UserService.getMyEvents();
        console.log('Myevents: ', vm.myEvents);
    };

    vm.deleteEvent = function(event){
        // console.log('delete event func called for event: ', event);
        vm.UserService.deleteEvent(event);
    };

});