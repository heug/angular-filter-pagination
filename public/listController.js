angular.module('repo-view.listController', [])
	
	.controller('listController', function($scope, repos) {
		$scope.repoList = [];
		$scope.pageSize = 10;
		$scope.currentPage = 1;

		repos.getAll().then(function(res) {
			$scope.repoList = res.data;
			console.log($scope.repoList);
		});

		$scope.numPages = function() {
			return Math.ceil($scope.repoList.length / $scope.pageSize);
		};

		$scope.pageRange = function(start, end) {
			var answer = [];
			for (var i = start; i <= end; i++) {
				answer.push(i);
			}
			return answer;
		};


	});