angular.module('module-main', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])
    .config(function($routeProvider,$locationProvider) {


    	/*
			Desabelita o uso do # nas url mais o backEnd tem que estar preparado e o Browser suportar	
			$locationProvider.html5Mode(true);
    	*/
    	
        $routeProvider.when('/fotos', {
            templateUrl: 'partials/principal.html',
            controller: 'FotoController'
        });

        $routeProvider.when('/fotos/new', {
            templateUrl: 'partials/fotos.html',
            controller: ''
        });


        $routeProvider.otherwise({redirectTo:'/fotos'});
        
   	});


