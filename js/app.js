/* App Module */

var webPastCrew = angular.module("webPastCrew", ["ngRoute"]);

webPastCrew.config(['$routeProvider', function($routeProvider){  
    $routeProvider.when('/home', {
		templateUrl : 'partials/home.html',
		controller : HomeController
	});
    $routeProvider.when('/services', {
		templateUrl : 'partials/services.html',
		controller : ChristianController
	});
    $routeProvider.when('/about', {
		templateUrl : 'partials/about.html',
		controller : ShannonController
	});
    $routeProvider.when('/calender', {
		templateUrl : 'partials/calender.html',
		controller : calenderController
	});
    $routeProvider.when('/contactus', {
		templateUrl : 'partials/contactus.html',
		controller : contactusController
	});
	$routeProvider.otherwise({
    	redirectTo : '/home'
	});
}]);

function HomeController($scope){

}

function ChristianController($scope){

}

function ShannonController($scope){

}

function calenderController($scope){

}

function contactusController(scope){

}