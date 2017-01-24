angular.module('repo-view.services', [])

	.factory('repos', function($http) {
		var store = {};
		store.getAll = function() {
			return $http({
				method: 'GET',
				url: '/data'
			}).then(function(res) {
				return res;
			})
		}
		return store;
	});
