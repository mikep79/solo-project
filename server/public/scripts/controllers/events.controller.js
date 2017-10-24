myApp.controller('EventsController', function (UserService) {
    // console.log('EventsController loaded');
    var vm = this;
    vm.UserService = UserService;
    vm.eventsObj = UserService.eventsObject;
    vm.userNeeds = {
        wheelchair: false,
        deafness: false,
        blind: false,
        bathroom: false,
        attendant: false,
        sensory: false,
        food: false
    };

    // vm.heartBorder = true;
    // vm.heart = false;
    // vm.attend = function(){
    //     vm.heart = !vm.heart;
    //     vm.heartBorder = !vm.heartBorder;
    //     console.log('heart and heartBorder: ', vm.heart, vm.heartBorder);
    // };

    vm.addAttend = function (eventId) {
        // console.log('event obj: ', eventId);
        UserService.addAttend(eventId);
        vm.getEvents();
    };

    vm.getEvents = function () {
        UserService.getEvents();
        console.log(vm.eventsObj);
    };

    vm.filter = function (need) {
        // change need from true to false, or false to true
        vm.userNeeds[need] = !vm.userNeeds[need];
        console.log('userNeeds: ', vm.userNeeds);
    };

});