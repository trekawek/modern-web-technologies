angular.module('app', [])
  .controller('TodoController', function($scope, $http) {
      $scope.form = {};
      $scope.tasks = [];
    
      function save() {
          $http.post('/api/todo', $scope.tasks);
      }
      
      $scope.addTask = function() {
          $scope.tasks.push($scope.form);
          $scope.form = {};
          save();
      };
      
      $scope.removeTask = function(task) {
          var index = $scope.tasks.indexOf(task);
          if (index > -1) {
              $scope.tasks.splice(index, 1);
          }
          save();
      }
      
      $http.get('/api/todo').success(function(data) {
          $scope.tasks = data;
      });
  });