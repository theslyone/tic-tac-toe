(function(){
  angular.module("tictactoe").controller('TicTacToeController', TicTacToeController);
  TicTacToeController.$inject = ['$scope'];
  function TicTacToeController($scope){
    $scope.squares = [];
    $scope.EMPTY = "\xA0";
    $scope.score = 0
    $scope.moves = 0;
    $scope.turn = "X";

    $scope.wins = [7, 56, 448, 73, 146, 292, 273, 84];

    $scope.startNewGame = function () {
      var i;
      $scope.turn = "X";
      $scope.score = {"X": 0, "O": 0};
      $scope.moves = 0;
      for (i = 0; i < $scope.squares.length; i += 1) {
        $scope.squares[i].firstChild.nodeValue = $scope.EMPTY;
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

    $scope.set = function () {
      if (this.firstChild.nodeValue !== $scope.EMPTY) {
        return;
      }
      this.firstChild.nodeValue = $scope.turn;
      $scope.moves += 1;
      $scope.score[$scope.turn] += this.indicator;
      if ($scope.win($scope.score[$scope.turn])) {
        alert($scope.turn + " wins!");
        $scope.startNewGame();
      } else if ($scope.moves === 9) {
        alert("Cat\u2019s game!");
        $scope.startNewGame();
      } else {
        $scope.turn = $scope.turn === "X" ? "O" : "X";
      }
    };

    $scope.play = function () {
      var board = document.createElement("table"),
        indicator = 1,
        i, j,
        row, cell,
        parent;
        board.border = 1;
      for (i = 0; i < 3; i += 1) {
        row = document.createElement("tr");
        board.appendChild(row);
        for (j = 0; j < 3; j += 1) {
          cell = document.createElement("td");
          cell.width = cell.height = 50;
          cell.align = cell.valign = 'center';
          cell.indicator = indicator;
          cell.onclick = $scope.set;
          cell.appendChild(document.createTextNode(""));
          row.appendChild(cell);
          $scope.squares.push(cell);
          indicator += indicator;
        }
      }
      // Attach under tictactoe if present, otherwise to body.
      parent = document.getElementById("tictactoe") || document.body;
      parent.appendChild(board);
      $scope.startNewGame();
    };
  }
})();
