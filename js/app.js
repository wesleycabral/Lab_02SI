angular.module("agendaDeTarefas", []);
angular.module("agendaDeTarefas").controller("listaTelefonicaCtrl", function ($scope) {
	$scope.app = "Agenda De Tarefas";
	$scope.tarefas = [
		{nome: "Caminhar", data: new Date()},
		{nome: "Correr", data: new Date()},
		{nome: "Jogar", data: new Date()}
	];

	$scope.adicionarTarefa = function(tarefa) {
		$scope.tarefas.push(angular.copy(tarefa));
		delete $scope.tarefa;
		$scope.tarefaForm.$setPristine();
	};
	$scope.limparTarefa = function(tarefas) {
		$scope.tarefas.length = 0;
		$scope.tarefas = tarefas.filter(function(tarefa){
			if(tarefa.selecionado) return tarefa;
		});
	};
	
	$scope.isTarefaSelecionada = function(tarefas){
		return tarefas.some(function(tarefa){
			return tarefa.selecionado;
		});
	};
	
	$scope.removeItem = function(tarefas) {
		$scope.tarefas.splice(tarefas, 1);
	}
	
	$scope.checkedCount = function() {
		return $scope.tarefas.filter(function(person) {
			return person.selecionado;
		}).length;
	}
	
	$scope.percentage = function() {
		return ($scope.checkedCount() / $scope.tarefas.length) * 100;
	}
});