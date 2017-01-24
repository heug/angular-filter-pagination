angular.module('repo-view.listController', [])
	
	.controller('listController', function($scope, repos) {
		$scope.repoList = [];
		$scope.scrollBar = [];
		$scope.pageSize = 10;
		$scope.currentPage = 1;
		$scope.pageSet = 1;

		repos.getAll().then(function(res) {
			$scope.repoList = res.data;
			$scope.scrollBar = $scope.pageRange();
		});

		$scope.numPages = function() {
			return Math.ceil($scope.repoList.length / $scope.pageSize);
		};

		$scope.pageRange = function() {
			var answer = [];
			var numPages = Math.min($scope.numPages(), 10);
			for (var i = 1; i <= numPages; i++) {
				answer.push(i);
			}
			return answer;
		};

		$scope.scrollPage = function(direction) {
			if ($scope.numPages() <= 10) {
				return;
			}
			if (direction === -1) {
				$scope.scrollBar.splice(-1,1).unshift($scope.scrollBar[0] - 1);
			}
			if (direction === 1) {
				$scope.scrollBar.shift().push($scope.scrollbar[$scope.scrollbar.length - 1] + 1);
			}
		};


	});
