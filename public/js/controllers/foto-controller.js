angular.module('module-main').controller('FotoController',function($scope){

	$scope.foto = {}
	$scope.subMeter = function(){
		console.log($scope.foto);
	};

});