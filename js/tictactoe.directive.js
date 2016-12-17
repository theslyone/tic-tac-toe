(function(){
  function pickerDirective() {
    return {
      restrict: 'EAC',
      replace: true,
      scope: {
        value: "=",
      },
      template:"<div class=\"column\"> {{value}} </div>",
      controller: function ($scope, $attrs, $timeout) {
        $scope.$on('$destroy', function () {

        });
      }
    };
  }
  angular.module('tictactoe').directive('picker', pickerDirective);
})();
