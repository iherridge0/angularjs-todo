(function (){
'use strict';

angular.module('ToDoApp')
.service('UserService', UserService);

UserService.$inject = ['$http']
function UserService($http) {
  var service = this;

  console.log("UserService is up and running");

  service.register = function(user){
    console.log("UserService.register()");

    var encryptedPassword = window.btoa(`${user.username}:${user.password}`);
    user.password = encryptedPassword;

    var response = $http({
      method: "POST",
      url: "http://localhost:8080/jpa/users",
      data: user
    });

    return response;
  }
}

})();
