myApp.controller('MyEventsController', function (UserService) {
    // console.log('MyEventsController loaded');
    var vm = this;
    vm.UserService = UserService;
    vm.myAttendingEvents = UserService.myAttendingEvents;
    // vm.myEvents = UserService.myEventsObject;
    // what's this for?? :
    // vm.eventsObj = UserService.eventsObject;   from other controller

    // get user's created events
    // vm.getMyEvents = function(){
    //     UserService.getMyEvents();
    //     console.log('Myevents: ', vm.myEvents);
    // };

    vm.removeAttend = function (eventId) {
        console.log('eventId: ', eventId);
        UserService.removeAttend(eventId);
        swal('Attendance removed from event.');
        vm.getAttendingEvents();
    };

    // delete user's created event
    // vm.deleteEvent = function(event){
    //     // console.log('delete event func called for event: ', event);
    //     vm.UserService.deleteEvent(event);
    // };

    // get all events marked 'attending'
    vm.getAttendingEvents = function () {
        UserService.getAttendingEvents();
    };

    vm.getAttendingEvents();
});