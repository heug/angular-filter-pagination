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
		// Maximum # of items per page
		$scope.itemLimit = 10;
		$scope.currentPage = 1;
		$scope.active = {};

		// Initialize by fetching all repos, determine number of total pages
		repos.getAll().then(function(res) {
			$scope.repoList = res.data;
			$scope.totalItems = $scope.repoList.length;
			$scope.numPages = Math.ceil($scope.totalItems / $scope.itemLimit);
			$scope.$watch('active', function(newVal, oldVal) {
				$scope.filtered = filterFilter($scope.repoList, newVal);
				$scope.totalItems = $scope.filtered.length;
				$scope.numPages = Math.ceil($scope.repoList.length / $scope.itemLimit);
				$scope.currentPage = 1;
			}, true);
		});
		
		$scope.resetFilters = function() {
			$scope.active = {};
		};

		$scope.pageRange = function() {
			var answer = [];
			var numPages = Math.min(numPages, 10);
			for (var i = 1; i <= numPages; i++) {
				answer.push(i);
			}
			return answer;
		};

		// Arrow buttons on scroll bar
		$scope.scrollPage = function(direction) {
			if (numPages <= 10) {
				return;
			}
			if (direction === -1) {
				$scope.scrollBar.splice(-1,1).unshift($scope.scrollBar[0] - 1);
			}
			if (direction === 1) {
				$scope.scrollBar.shift().push($scope.scrollbar[$scope.scrollbar.length - 1] + 1);
			}
		};


	}]);
