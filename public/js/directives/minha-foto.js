angular.module('minhaFotoDiretiva',[])
	.directive('minhaFoto',function () {

		var  ddo = {};	

		ddo.restrict = 'AE';	
		ddo.scope = {
			url:'@url',
			titulo:'@titulo'
		};
		ddo.transclude = true;
		ddo.templateUrl ='js/directives/minha-foto.html';
				
		return ddo;
	});