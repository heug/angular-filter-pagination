

angular.module('repo-view', [
	'repo-view.services',
	'repo-view.listController',
	'ui.bootstrap',
	'ngRoute'
])

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
