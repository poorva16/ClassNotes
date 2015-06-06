angular.module('notesApp').service('subListService', function ($http,$q) {
	var deferred= $q.defer();
	$http.get('subject_list.json').then(function (data) {
		deferred.resolve(data);
	});

	this.getSubjects=function() {
		return deferred.promise;
	}
})
	
	angular.module('notesApp').controller('subListCtrl', ['$scope', 'subListService', function ($scope,subListService) {
		var promise= subListService.getSubjects();
		promise.then(function (data) {
			$scope.subs = data;
			console.log($scope.subs);
		})
		  
	}])