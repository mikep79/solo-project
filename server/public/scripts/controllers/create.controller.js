myApp.controller('CreateController', function (UserService) {
  var vm = this;
  vm.userService = UserService;

  vm.grabEvent = function () {
    UserService.createEvent();
  }

});
