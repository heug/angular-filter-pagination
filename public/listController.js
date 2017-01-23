angular.module('repo-view.listController', [])
	
	.controller('listController', function($scope, repos) {
		$scope.repoList = [];
		$scope.pageSize = 10;
		$scope.currentPage = 0;
		
		repos.getAll().then(function(res) {
			$scope.repoList = res.data;
			console.log($scope.repoList);
		});
		
	});