(function(){
  angular.module("pomodoro").controller('PomodoroController', PomodoroController);
  PomodoroController.$inject = ['$scope'];
  function PomodoroController($scope){
    $scope.mode = 1;

    $scope.workFor = 10;
    $scope.restFor = 5;
    $scope.timerActive = false;

    $scope.start = function(){
      $scope.timerActive = true;
    };
    $scope.pause = function(){
      $scope.timerActive = false;
    };

    $scope.update = function(value){
      switch ($scope.mode) {
        case 0:
          $scope.restFor = $scope.restFor + value > 0 ? $scope.restFor + value : 0;
          break;
        case 1:
          $scope.workFor = $scope.workFor + value > 0 ? $scope.workFor + value : 0;
          break;
      }
    };
    $scope.toggleMode = function(){
      $scope.mode = $scope.mode == 0 ? 1 : 0;
    };

    $scope.callback = function () {
        $scope.txt = 'Countdown is over!';
        $scope.workFor = 10;
    };
  }
})();
