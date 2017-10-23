myApp.controller('CreateController', function (UserService) {
  var vm = this;
  vm.userService = UserService;

  vm.accessTagsIn = {
    wheelchair: false,
    deafness: false
  }

  vm.toggleAccessTag = function(tag){
    // console.log(tag, 'tag toggled: ', vm.accessTagsIn[tag]);
    vm.accessTagsIn[tag] = !vm.accessTagsIn[tag];
    // console.log('access tags object: ', vm.accessTagsIn);
  };

  vm.grabEvent = function () {
    console.log('test input: ', vm.testInput);
    
    
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
      // time_start: vm.timeStartIn,
      time_start: vm.dateIn + 'testinsert' + vm.timeEndIn,
      time_end: vm.timeEndIn,
      count: null,
      access_tags: vm.accessTagsIn,
      content_tags: vm.contentTagsIn,
      time_test: vm.testIn
    };
    // console.log('vm.eventObj: ', vm.dateIn, vm.eventObj);
    // UserService.createEvent(vm.eventObj);
  }

});
