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

  vm.contentTagsIn = {
    games: false,
    animals: false,
    food: false,
    sports: false,
    nature: false,
    movies: false,
    shopping: false,
    artsAndCrafts: false,
    danceAndMusic: false,
    partyAndHoliday: false,
  };

  vm.states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
  vm.content = [ {text: 'Games', tagIn: 'games'}, {text: 'Animals', tagIn: 'animals'}, {text: 'Food', tagIn: 'food'}, {text: 'Sports', tagIn: 'sports'}, {text: 'Nature', tagIn: 'nature'}, {text: 'Movies', tagIn: 'movies'}, {text: 'Shopping', tagIn: 'shopping'}, {text: 'Arts and Crafts', tagIn: 'artsAndCrafts'}, {text: 'Dance and Music', tagIn: 'danceAndMusic'}, {text: 'Party and Holiday', tagIn: 'partyAndHoliday'}];

  vm.grabEvent = function () {
    var tag = vm.contentTagsInValue;
    // change selected value to true
    vm.contentTagsIn[tag] = true;
    // console.log('activity should be true! : ', vm.contentTagsIn[contentTag]);
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
