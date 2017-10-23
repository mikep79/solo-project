myApp.controller('CreateController', function (UserService) {
  var vm = this;
  vm.userService = UserService;

  vm.accessTagsIn = {
    wheelchair: false,
    deafness: false,
    blind: false,
    bathroom: false,
    attendant: false,
    sensory: false
  };

  vm.states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
  vm.content = ['Games', 'Animals', 'Food', 'Sports', 'Nature', 'Movies', 'Shopping', 'Arts and Crafts', 'Dance and Music', 'Party and Holiday'];

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
      count: 0,
      access_tags: vm.accessTagsIn,
      content_tags: vm.contentTagsIn
    };
    console.log('vm.eventObj: ', vm.eventObj);
    UserService.createEvent(vm.eventObj);
  }

  // using buttons to toggle access tags:
  // vm.toggleAccessTag = function(tag){
  //   // console.log(tag, 'tag toggled: ', vm.accessTagsIn[tag]);
  //   vm.accessTagsIn[tag] = !vm.accessTagsIn[tag];
  //   // console.log('access tags object: ', vm.accessTagsIn);
  // };

});
