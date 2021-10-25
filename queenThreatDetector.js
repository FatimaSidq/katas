function generateBoard(whiteQueen, blackQueen) {
  let result = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];
  result[whiteQueen[0]][whiteQueen[1]] = 1;
  result[blackQueen[0]][blackQueen[1]] = 1;
  return result;
}

function queenThreat(board) {
  let queens = [];
  for (let row of board) {
    if (row.includes(1)) {
      if (row.filter((square) => square == 1).length == 2) {
        return true;
      }
      queens.push([board.indexOf(row), row.indexOf(1)]);
    }
  }

  if (queens[0][1] == queens[1][1]) {
    console.log(queens);
    return true;
  }

  for (let i = queens[0][0]; i < board.length; i++) {
    if (board[i][queens[0][1] + i]) {
      return true;
    } else if (board[i][queens[0][1] - i]) {
      return true;
    }
  }
  
  return false;
}

let whiteQueen = [5, 0];
let blackQueen = [0, 5];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
