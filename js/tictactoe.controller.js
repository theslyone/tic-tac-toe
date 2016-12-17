(function(){
  angular.module("tictactoe").controller('TicTacToeController', TicTacToeController);
  TicTacToeController.$inject = ['$scope', '$state'];
  function TicTacToeController($scope, $state){
    $scope.squares = [];
    $scope.EMPTY = "\xA0";
    $scope.score = 0
    $scope.moves = 0;
    /*
    * To determine a win condition, each square is "tagged" from left
    * to right, top to bottom, with successive powers of 2.  Each cell
    * thus represents an individual bit in a 9-bit string, and a
    * player's squares at any given time can be represented as a
    * unique 9-bit value. A winner can thus be easily determined by
    * checking whether the player's current 9 bits have covered any
    * of the eight "three-in-a-row" combinations.
    *
    *     273                 84
    *        \               /
    *          1 |   2 |   4  = 7
    *       -----+-----+-----
    *          8 |  16 |  32  = 56
    *       -----+-----+-----
    *         64 | 128 | 256  = 448
    *       =================
    *         73   146   292
    *
    */
    $scope.indicators = [1, 2, 4, 8, 16, 32, 64, 128, 256];
    $scope.wins = [7, 56, 448, 73, 146, 292, 273, 84];

    $scope.players = function(count){
      switch(count){
        case 1:
          break;
        case 2:
          break;
        default:

          break;
      }
      $state.go('side');
    };

    $scope.side = function(value){
      $scope.turn = value;
      $state.go('play');
    };

    $scope.reset = function(value){
      $state.go('player');
    };

    $scope.startNewGame = function () {
      var i;
      console.log($scope.turn);
      $scope.score = {"X": 0, "O": 0};
      $scope.moves = 0;
      for (i = 0; i < $scope.squares.length; i += 1) {
        $scope.squares[i].value = $scope.EMPTY;
      }
    };

    $scope.win = function (score) {
      var i;
      for (i = 0; i < $scope.wins.length; i += 1) {
        if (($scope.wins[i] & score) === $scope.wins[i]) {
          return true;
        }
      }
      return false;
    };

    $scope.picked = function (square) {
      if (square.value !== $scope.EMPTY) {
        return;
      }
      square.value = $scope.turn;
      $scope.moves += 1;
      $scope.score[$scope.turn] += square.indicator;
      if ($scope.win($scope.score[$scope.turn])) {
        alert($scope.turn + " wins!");
        $scope.startNewGame();
      } else if ($scope.moves === 9) {
        alert("Cat\u2019s game!");
        $scope.startNewGame();
      } else {
        advanceTurn();
      }
    };

    $scope.play = function () {
      $scope.indicators.forEach(function(element, index, array){
        var cell = { indicator: element, value: $scope.EMPTY };
        $scope.squares.push(cell);
      });
      $scope.startNewGame();
    };

    advanceTurn = function() {
        $scope.turn = $scope.turn === "X" ? "O" : "X";
    }

    emptyCells = function() {
        var indxs = [];
        for(var itr = 0; itr < $scope.squares.length ; itr++) {
            if($scope.squares[itr].value === $scope.EMPTY) {
                indxs.push(itr);
            }
        }
        return indxs;
    }
  }
})();
