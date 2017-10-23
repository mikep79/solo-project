myApp.controller('EventsController', function(UserService){
    // console.log('EventsController loaded');
    var vm = this;
    vm.UserService = UserService;
    vm.eventsObj = UserService.eventsObject;
    vm.heartBorder = true;
    vm.heart = false;
    // vm.sortedEvents = [];
    
    // vm.attend = function(){
    //     vm.heart = !vm.heart;
    //     vm.heartBorder = !vm.heartBorder;
    //     console.log('heart and heartBorder: ', vm.heart, vm.heartBorder);
    // };

    vm.addCount = function(eventId){
        console.log('event obj: ', eventId);
        
        // // console.log('event count: ', event.count);
        // if (event.count === null){
        //     event.count = 1;
        // } else {
        //     event.count++;
        // }
        // // console.log('event count: ', event.count);
        UserService.addCount(eventId);
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