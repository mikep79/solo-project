myApp.controller('EventsController', function (UserService) {
    // console.log('EventsController loaded');
    var vm = this;
    vm.UserService = UserService;
    vm.eventsObj = UserService.eventsObject;
    vm.startMessage = true;
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

    var currentTime = new Date().getTime();

    vm.filterConditions = '!eachEvent.access_tags.wheelchair && EC.userNeeds.wheelchair || !eachEvent.access_tags.deafness && EC.userNeeds.deafness || !eachEvent.access_tags.blind && EC.userNeeds.blind || !eachEvent.access_tags.bathroom && EC.userNeeds.bathroom || !eachEvent.access_tags.attendant && EC.userNeeds.attendant || !eachEvent.access_tags.sensory && EC.userNeeds.sensory || EC.userContent.displayAll || !eachEvent.content_tags.games && EC.userNeeds.games || !eachEvent.content_tags.animals && EC.userNeeds.animals || !eachEvent.content_tags.food && EC.userNeeds.food || !eachEvent.content_tags.sports && EC.userNeeds.sports || !eachEvent.content_tags.nature && EC.userNeeds.nature || !eachEvent.content_tags.movies && EC.userNeeds.movies || !eachEvent.content_tags.shopping && EC.userNeeds.shopping || !eachEvent.content_tags.artsAndCrafts && EC.userNeeds.artsAndCrafts || !eachEvent.content_tags.danceAndMusic && EC.userNeeds.danceAndMusic || !eachEvent.content_tags.partyAndHoliday && EC.userNeeds.partyAndHoliday';

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
        currentTime = new Date().getTime();
        console.log('currentDate: ', currentTime);
        UserService.getEvents();
        console.log(vm.eventsObj);
    };

    vm.filter = function (need) {
        // change need from true to false, or false to true
        vm.userNeeds[need] = !vm.userNeeds[need];
        console.log('userNeeds: ', vm.userNeeds);
    };

    vm.contentDisplay = function(event){
        // console.log('event: ', event);
        // hide starting message
        vm.startMessage = false;
        vm.eventContent = event;
        var dateTest = new Date(event.time_start).getTime();
        console.log('Event time:', dateTest );
        
    };

});