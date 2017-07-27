angular.module('module-main').controller('FotosController',function($scope, $http){

	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = {};

	$http.get('/v1/fotos')
	.success(function(fotos){
		$scope.fotos = fotos;
	})
	.catch(function(error){
		console.log(error)
	});	

	$scope.remover = function(foto){
		$http.delete('v1/fotos/'+ foto._id)
		.success(function(){
			var indexFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indexFoto,1);
			$scope.mensagem = 'Foto '+ foto.titulo + 'foi removida com successo';

			console.log('Foto '+ foto.titulo + ' foi removida com successo');
		})
		.error(function(error){
			console.log('Erro ao deletar a foto: '+ foto.titulo + ' erro:' + error);
		});

	};

});


