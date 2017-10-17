myApp.controller('EventsController', function(UserService){
    // console.log('EventsController loaded');
    var vm = this;
    vm.UserService = UserService;
    vm.eventsObj = vm.UserService.eventsObject;
    // vm.sortedEvents = [];

    vm.getEvents = function(){
        UserService.getEvents();
        // console.log(vm.eventsObj);
        
        // logic for removing empty events arrays:
        // for (var i = 0; i < vm.eventsObj.data.length; i++){
        //     if (vm.eventsObj.data[i].events.length !== 0){
        //         for (var j = 0; j < vm.eventsObj.data[i].events.length; j++){
        //             vm.sortedEvents.push(vm.eventsObj.data[i].events[j]);
        //         }
        //     }
        // }
        // console.log('sorted array: ', vm.sortedEvents);
    };

});