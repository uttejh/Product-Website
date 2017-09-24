var app = angular.module("myapp",['ui.router','ngAnimate','ui.bootstrap']);

app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/home");

	$stateProvider
		.state('home',{
			url:'/home',
			views:{
				"main":{
					templateUrl:"partials/home.html",
					data:{title:"Home"},
					controller:"HomeController"
				}
			}
		});
});