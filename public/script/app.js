angular.module('repo-view', [
	'repo-view.services',
	'repo-view.listController',
	'ui.bootstrap',
	'ngRoute'
])

// TODO: Extend routes for other tabs
.config(function($routeProvider) {
	$routeProvider
		.when('/repos', {
			templateUrl: 'viewrepos.html',
			controller: 'listController'
		})
		.otherwise({
			redirectTo: 'repos'
		});
});
