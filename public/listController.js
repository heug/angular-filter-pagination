angular.module('repo-view.listController', [])

	.filter('startFrom', function() {
		return function(input, start) {
			if (input) {
				start = +start;
				return input.slice(start);
			}
			return [];
		}
	})
	
	.controller('listController', ['$scope', 'repos', 'filterFilter', function($scope, repos, filterFilter) {
		$scope.currentPage = 1;
		$scope.itemLimit = 10;
		$scope.active = {};
		$scope.accountList = {};

		// Initialize by fetching all repos, determine number of total pages
		repos.getAll().then(function(res) {
			$scope.repoList = res.data;
			$scope.totalItems = $scope.repoList.length;
			$scope.numPages = Math.ceil($scope.totalItems / $scope.itemLimit);
			$scope.$watch('active', function(newVal, oldVal) {
				$scope.filtered = filterFilter($scope.repoList, newVal);
				console.log($scope.filtered);
				$scope.totalItems = $scope.filtered.length;
				$scope.numPages = Math.ceil($scope.repoList.length / $scope.itemLimit);
				$scope.currentPage = 1;
			}, true);
			for (var i = 0; i < $scope.totalItems; i++) {
				if (!$scope.accountList[$scope.repoList[i].accountName]) {
					$scope.accountList[$scope.repoList[i].accountName] = true;
				}
			}
		});


		
		$scope.resetFilters = function() {
			$scope.active = {};
		};

	}]);
