angular.module('repo-view', [
	'repo-view.services',
	'repo-view.listController',
	'ui.bootstrap',
	'ui.select',
	'ngSanitize',
	'ngRoute',
])

.config(function($routeProvider) {
	$routeProvider
		.when('/view', {
			templateUrl: 'viewrepos.html',
			controller: 'listController'
		})
		.otherwise({
			redirectTo: 'view'
		});
});
