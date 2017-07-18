angular.module('module-main').controller('FotoController',function($scope, $http, $routeParams){

	$scope.foto = {}
	$scope.mensagem = {}

	if($routeParams.fotoId){
		$http.get('v1/fotos/' + $routeParams.fotoId)
		.success(function(foto){
			$scope.foto = foto;
		})
		.error(function(erro){
			$mensagem = 'Foto não encontrada';
		});	
	}

	$scope.subMeter = function(){

		if ($scope.formulario.$valid){

			if($scope.foto._id){
				$http.put('v1/fotos/'+ $scope.foto._id,$scope.foto)
				.success(function (foto){			
					$scope.foto = foto;
					$scope.mensagem = 'Foto editada com sucesso';					
				})
				.error(function (erro){
					$scope.mensagem = 'Erro ao editar foto:' + $scope.foto.titulo;
					console.log(erro)
				});

			}else{
				$http.post('v1/fotos',$scope.foto)
				.success(function (){			
					$scope.foto = {};
					$scope.mensagem = 'Foto casdastrada com sucesso';				
				})
				.error(function (erro){
					$scope.mensagem = 'Erro ao cadastrar foto';
					console.log(erro)
				});	
			}
			
		}
	};

});