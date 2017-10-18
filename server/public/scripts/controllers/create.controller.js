myApp.controller('CreateController', function (UserService) {
  var vm = this;
  vm.userService = UserService;

  vm.grabEvent = function () {
    vm.eventObj = {
      name: vm.nameIn,
      description: vm.descriptionIn,
      location: {
        name: vm.locNameIn,
        street: vm.streetIn,
        city: vm.cityIn,
        state: vm.stateIn,
        zip: vm.zipIn
      },
      time_start: vm.timeStartIn,
      time_end: vm.timeEndIn,
      count: null,
      access_tags: vm.accessTagsIn,
      content_tags: vm.contentTagsIn
    };
    console.log('vm.eventObj: ', vm.eventObj);
    
    UserService.createEvent(vm.eventObj);
  }

});
