angular.module('module-main').controller('FotoController',function($scope,$http){

	$scope.fotos = [];

	$http.get('/v1/fotos')
	.success(function(fotos){
		$scope.fotos = fotos;
	})
	.catch(function(error){
		console.log(error)
	});	
});