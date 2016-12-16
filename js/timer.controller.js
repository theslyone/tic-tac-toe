(function(){
  angular.module("pomodoro").controller('PomodoroController', PomodoroController);
  PomodoroController.$inject = ['$scope'];
  function PomodoroController($scope){
    $scope.mode = 1;

    $scope.workFor = $scope.workForDefault = 25 * 60;
    $scope.restFor = $scope.restForDefault = 5 * 60;
    $scope.workActive = false;
    $scope.restActive = false;
    $scope.state = "Idle";

    $scope.start = function(){
      $scope.startWork();
    };
    $scope.pause = function(){
      $scope.state = "Paused";
      $scope.workActive = $scope.restActive = false;
    };

    $scope.update = function(value){
      if(!$scope.workActive && !$scope.restActive){
        switch ($scope.mode) {
          case 0:
            $scope.restFor = $scope.restFor + value * 60 > 0 ? $scope.restFor + value * 60 : 0;
            $scope.restForDefault = $scope.restFor;
            break;
          case 1:
            $scope.workFor = $scope.workFor + value * 60 > 0 ? $scope.workFor + value * 60 : 0;
            $scope.workForDefault = $scope.workFor;
            break;
        }
      }
    };
    $scope.toggleMode = function(){
      $scope.mode = $scope.mode == 0 ? 1 : 0;
    };

    $scope.startRest = function () {
      $scope.state = 'Rest Time!';
      $scope.restActive = true;
      $scope.workFor = $scope.workForDefault;
    };

    $scope.startWork = function () {
      $scope.mode = 1;
      $scope.state = 'Work Time!';
      $scope.workActive = true;
      $scope.restFor = $scope.restForDefault;
    };
  }
})();
