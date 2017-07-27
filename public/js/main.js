angular.module('module-main', ['minhasDiretivas','ngAnimate', 'ngRoute', 'ngResource', 'meusServicos','minhaFotoDiretiva'])
    .config(function($routeProvider,$locationProvider) {


    	/*
			Desabelita o uso do # nas url mais o backEnd tem que estar preparado e o Browser suportar	
			$locationProvider.html5Mode(true);
    	*/
    	
        $routeProvider.when('/fotos', {
            templateUrl: 'partials/principal.html',
            controller: 'FotosController'
        });

        $routeProvider.when('/fotos/new', {
            templateUrl: 'partials/fotos.html',
            controller: 'FotoController'
        });

        $routeProvider.when('/fotos/edit/:fotoId', {
            templateUrl: 'partials/fotos.html',
            controller: 'FotoController'
        });


        $routeProvider.otherwise({redirectTo:'/fotos'});
        
   	});


