(function (){
'use strict';

angular.module('ToDoApp')
.service('AuthService', AuthService);

AuthService.$inject = ['$http']
function AuthService($http) {
  var service = this;

  service.auth = {};

  service.$onInit = function () {
    console.log("AuthService started!");

    console.log("Checking if user is logged in...");
    console.log("service.auth {}", service.auth);

  }

  service.isAuthenticated = function () {
    if(service.auth.token)
      return true;
    else
      return false;
  }

  service.login = function(user){

    // var encryptedPassword = window.btoa(`${user.username}:${user.password}`);
    // user.password = encryptedPassword;

    var response = $http({
      method: "POST",
      url: "http://localhost:8080/authenticate",
      data: user
    });

    return response;
  }
}

})();
