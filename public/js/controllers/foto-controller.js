angular.module('module-main').controller('FotoController',function($scope,$http){

	$scope.foto = {}
	$scope.mensagem = {}

	$scope.subMeter = function(){

		if ($scope.formulario.$valid){

			$http.post('v1/fotos',$scope.foto)
			.success(function (){			
				$scope.foto = {};
				$scope.mensagem = 'Foto casdastrada com sucesso';
				console.log("foto cadastrada");
			})
			.error(function (erro){
				$scope.mensagem = 'Erro ao cadastrar foto';
				console.log(erro)
			});
		}
	};

});