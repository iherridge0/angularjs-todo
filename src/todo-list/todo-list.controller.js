(function () {
'use strict';

angular.module('TodoList')
.controller('TodoListController', TodoListController);

TodoListController.$inject = ['UserService']
function TodoListController(UserService){
  var $ctrl = this;

  $ctrl.todoList = {}

  $ctrl.$onInit = function() {
    console.log("TodoListController.$onInit");
  }

};


})();
