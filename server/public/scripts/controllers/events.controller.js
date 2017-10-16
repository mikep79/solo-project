myApp.controller('EventsController', function(UserService){
    // console.log('EventsController loaded');
    var vm = this;
    vm.UserService = UserService;
    vm.eventsObj = vm.UserService.eventsObject;

    vm.getEvents = function(){
        UserService.getEvents();
        // console.log(vm.eventsObj);
    };

});