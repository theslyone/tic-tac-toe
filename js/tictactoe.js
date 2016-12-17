(function(){
  angular.module("tictactoe", ['ui.router']);
  angular
    .module('tictactoe')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
    .state('player', {
      url: '/',
      template: `<div class="ui padded">
                  <h2 class="ui dividing center aligned header">How do you want to play?</h2>
                  <div>
                    <button class="ui compact mini green disabled button" ng-click="players(1)">One Player</button>
                    <button class="ui compact mini blue button" ng-click="players(2)">Two Players</button>
                  </div>
                </div>`,
    })
    .state('side', {
      url: '/side',
      template: `<div class="ui padded">
                  <h2 class="ui dividing center aligned header">Player 1</h2>
                  <div class="ui centered center aligned">
                    <p>Select side</p>
                    <button class="ui compact green button" ng-click="side('X')">X</button>
                    <button class="ui compact blue button" ng-click="side('O')">O</button>
                  </div>
                </div>
                <button class="ui red mini compact reset button" ng-click="reset()">reset</button>`,
    })
    .state('play', {
      url: '/play',
      template: `<div class="ui celled three column grid" ng-init="play()">
                  <picker ng-repeat="square in squares" value="square.value" ng-click="picked(square)"></picker>
                </div>
                <button class="ui red mini compact reset button" ng-click="reset()">reset</button>`,
    });
  }

})();
