myApp.controller('EventsController', function(UserService){
    // console.log('EventsController loaded');
    var vm = this;
    vm.UserService = UserService;
    vm.eventsObj = UserService.eventsObject;

    // vm.sortedEvents = [];
    
    // vm.heartBorder = true;
    // vm.heart = false;
    // vm.attend = function(){
    //     vm.heart = !vm.heart;
    //     vm.heartBorder = !vm.heartBorder;
    //     console.log('heart and heartBorder: ', vm.heart, vm.heartBorder);
    // };

    vm.addAttend = function(eventId){
        // console.log('event obj: ', eventId);
        UserService.addAttend(eventId);
        vm.getEvents();
    };

    vm.getEvents = function(){
        UserService.getEvents();
        console.log(vm.eventsObj);
    };

    vm.sortEvents = function(){
        console.log('unsorted events: ', vm.eventsObj.data);
        for (var i=0; i<vm.eventsObj.data.length; i++){
            if (vm.eventsObj.data[i].access_tags.deafness){
                console.log('Yes!', vm.eventsObj.data[i].access_tags.deafness);
            } else {
                console.log('No!', vm.eventsObj.data[i].access_tags.deafness);
                
            }
        }
        
    }

});