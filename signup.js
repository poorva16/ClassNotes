
 var app=angular.module('notesApp', ['ngRoute'])
  app.config(function($routeProvider) {
    $routeProvider.
    when('/signUp', {
                  templateUrl: 'signUp.html',
                  controller: 'formCtrl'
                })
    
  });


angular.module('notesApp').controller('formCtrl', function ($scope,$http) {
    	//function formCtrl($scope, $http)
  $scope.errors = [];
  $scope.msgs = [];

  $scope.signUp = function() {

  $scope.errors.splice(0, $scope.errors.length); // remove all error messages
  $scope.msgs.splice(0, $scope.msgs.length);

  
  $http.post('signUp.php', {'fname': $scope.first_name, 'lname': $scope.last_name, 'regno': $scope.reg_no, 'pswd': $scope.password})
  .success(function(data, status, headers, config) {
    if (data.msg != '')
    {
      $scope.msgs.push(data.msg);
    }
    else
    {
      $scope.errors.push(data.error);
    }
    })
  .error(function(data, status) { // called asynchronously if an error occurs
// or server returns response with an error status.
    $scope.errors.push(status);
    });
    }
    })
    
 