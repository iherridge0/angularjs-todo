(function (){
'use strict';

angular.module('ToDoApp')
.service('UserService', UserService);

UserService.$inject = ['$http']
function UserService($http) {
  var service = this;

  console.log("UserService is up and running");

  service.register = function(newUser){
    //var encryptedPassword = window.btoa(`${newUser.username}:${newUser.password}`);
    //newUser.password = encryptedPassword;


    service.createNewUser = function (){
      console.log("Creating new user");

      var response = $http({
        method: "POST",
        url: "http://localhost:8080/jpa/users",
        data: newUser
      });

      return response;
    }

    var promise = service.createNewUser();

    promise.then(function (response){
      var data = response.data;
      console.log(data);

    })
    .catch(function (error) {
      console.log("Something went terribly wrong." + error.message);
    });
  }



}

})();
