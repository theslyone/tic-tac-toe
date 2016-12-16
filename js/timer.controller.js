(function(){
  angular.module("pomodoro").controller('PomodoroController', PomodoroController);
  PomodoroController.$inject = ['$scope'];
  function PomodoroController($scope){
    $scope.time = 10;
    $scope.timerActive = false;
    $scope.start = function(){
      $scope.timerActive = true;
    };
    $scope.pause = function(){
      $scope.timerActive = false;
    };
    $scope.increment = function(){
      $scope.time+=1;
    };
    $scope.decrement = function(){
      if($scope.time > 0){
        $scope.time-=1;
      }
    };
    $scope.callback = function () {
        $scope.txt = 'Countdown is over!';
        $scope.time = 10;
    };
  }
})();
