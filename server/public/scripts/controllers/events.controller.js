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
        games: false,
        animals: false,
        food: false,
        sports: false,
        nature: false,
        movies: false,
        shopping: false,
        artsAndCrafts: false,
        danceAndMusic: false,
        partyAndHoliday: false
    };

    vm.addAttend = function (eventId) {
        // console.log('event obj: ', eventId);
        vm.eventContent.attending = true;
        // decrement item's display count
        vm.eventContent.count++;
        console.log('vm.eventContent.attending should be TRUE ', vm.eventContent.attending);
        UserService.addAttend(eventId);
        // vm.getEvents();
    };

    vm.removeAttend = function(eventId){
        // console.log('eventId: ', eventId);
        vm.eventContent.attending = false;
        // decrement item's display count
        vm.eventContent.count--;
        console.log('vm.eventContent.attending should be FALSE ', vm.eventContent.attending);
        UserService.removeAttend(eventId);
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

    vm.contentDisplay = function(event){
        console.log('event: ', event);
        vm.eventContent = event;
    };

});