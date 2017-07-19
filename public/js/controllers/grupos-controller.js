angular.module('module-main').controller('GruposController',function($scope, $http) {

	$scope.grupos = [];


	$http.get('v1/grupos')
	.success(function(data){
		$scope.grupos = data;
	})
	.error(function(erro){
		console.log('Erro ao buscar os grupos');
	});
});