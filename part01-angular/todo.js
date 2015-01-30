angular.module('app', [])
  .controller('TodoController', ['$scope', function($scope) {
      $scope.form = {};
      $scope.tasks = [];
      
      $scope.addTask = function() {
          $scope.tasks.push($scope.form);
          $scope.form = {};
      };
      
      $scope.removeTask = function(task) {
          var index = $scope.tasks.indexOf(task);
          if (index > -1) {
              $scope.tasks.splice(index, 1);
          }
      }
  }]);