angular.module("agendaDeTarefas", []);
angular.module("agendaDeTarefas").controller("listaTelefonicaCtrl", function ($scope) {
	$scope.app = "Agenda De Tarefas";
	$scope.tarefas = [
		{nome: "Caminhar", data: new Date()},
		{nome: "Correr", data: new Date()},
		{nome: "Jogar", data: new Date()}
	];

	/*funcao para adiconar tarefas a lista*/
	$scope.adicionarTarefa = function(tarefa) {
		$scope.tarefas.push(angular.copy(tarefa));
		delete $scope.tarefa;
		$scope.tarefaForm.$setPristine();
	};
	
	/*funcao para remover todas as tarefas da lista*/
	$scope.limparTarefa = function(tarefas) {
		$scope.tarefas.length = 0;
		$scope.tarefas = tarefas.filter(function(tarefa){
			if(tarefa.selecionado) return tarefa;
		});
	};
	
	/*funcao para remover item*/
	$scope.removeItem = function(tarefas) {
		$scope.tarefas.splice(tarefas, 1);
	}
	
	/*contador do numero de tarefas checadas*/
	$scope.checkedCount = function() {
		return $scope.tarefas.filter(function(person) {
			return person.selecionado;
		}).length;
	}
	
	/*faz o calculo da percentagem*/
	$scope.percentage = function() {
		if($scope.tarefas.length > 0){
			return ($scope.checkedCount() / $scope.tarefas.length) * 100;
		}
		else{
			return 0;
		}
	}
});