/* eslint-disable camelcase */
import React from 'react';
import './App.css';
import Board1 from './board1';

const Game = ({
  p_history,
  p_step,
  p_xIsNext,
  p_isDescending,
  p_changeStep,
  p_clickSquare,
  p_sortMoves,
}) => {
  const playerA = 'X';
  const playerB = 'O';
  let winner = null;

  const checkRow = (i, j, squares) => {
    let tempJ;
    let rowCount = 0;
    // let start;
    tempJ = j;

    // Di ngang qua trai de tim diem giong nhau
    while (tempJ !== j - 5 && tempJ >= 0 && squares[i][tempJ] === squares[i][j]) {
      rowCount += 1;
      tempJ -= 1;
    }
    const start = tempJ + 1;
    tempJ = j + 1; // reset va khong dem lai diem dau tien
    // Tim ben phai
    while (tempJ !== j + 5 && tempJ <= 19 && squares[i][tempJ] === squares[i][j]) {
      rowCount += 1;
      tempJ += 1;
    }
    const end = tempJ - 1;

    // Check 5 in
    const enemy = p_xIsNext ? playerB : playerA;
    if (rowCount >= 5) {
      if (squares[i][start - 1] === enemy && squares[i][end + 1] === enemy) {
        return 0;
      }
      return rowCount;
    }
    return rowCount;
  };

  const checkColumn = (i, j, squares) => {
    let TempI;
    let colCount = 0;
    // Check hang doc

    TempI = i;
    // Tim len tren
    while (TempI !== i - 5 && TempI >= 0 && squares[TempI][j] === squares[i][j]) {
      colCount += 1;
      TempI -= 1;
    }
    const start = TempI + 1;
    TempI = i + 1; // reset va khong dem lai diem dau tien
    // Tim xuong duoi
    while (TempI !== i + 5 && TempI <= 19 && squares[TempI][j] === squares[i][j]) {
      colCount += 1;
      TempI += 1;
    }
    const end = TempI - 1;
    const enemy = p_xIsNext ? playerB : playerA;
    if (colCount >= 5) {
      if (start > 0 && squares[start - 1][j] === enemy && squares[end + 1][j] === enemy) {
        return 0;
      }
      return colCount;
    }
    return colCount;
  };

  const checkLeftDiagonal = (i, j, squares) => {
    let count = 0;
    let index = 0;

    // duong cheo trai ben tren
    while (
      index < 5 &&
      i - index >= 0 &&
      j - index >= 0 &&
      squares[i - index][j - index] === squares[i][j]
    ) {
      count += 1;
      index += 1;
    }
    const startIndex = index;
    index = 1; // khong dem lai diem moi chon

    // duong cheo trai ben duoi
    while (index < 5 && squares[i + index][j + index] === squares[i][j]) {
      count += 1;
      index += 1;
    }
    const endIndex = index;
    const enemy = p_xIsNext ? playerB : playerA;
    if (count >= 5) {
      if (
        i - startIndex >= 0 &&
        j - startIndex >= 0 &&
        squares[i - startIndex][j - startIndex] === enemy &&
        squares[i + endIndex][j + endIndex] === enemy
      ) {
        return 0;
      }
      return count;
    }
    return count;
  };

  const checkRightDiagonal = (i, j, squares) => {
    let count = 0;
    let index = 0;

    while (index < 5 && i - index >= 0 && squares[i - index][j + index] === squares[i][j]) {
      count += 1;
      index += 1;
    }
    const startIndex = index;
    index = 1; // khong dem lai diem moi chon
    while (index < 5 && j - index >= 0 && squares[i + index][j - index] === squares[i][j]) {
      count += 1;
      index += 1;
    }
    const endIndex = index;
    const enemy = p_xIsNext ? playerB : playerA;
    if (count >= 5) {
      if (
        i - startIndex >= 0 &&
        j - endIndex >= 0 &&
        squares[i - startIndex][j + startIndex] === enemy &&
        squares[i + endIndex][j - endIndex] === enemy
      ) {
        return 0;
      }
      return count;
    }
    return count;
  };

  const checkWinner = (i, j, squares) => {
    // console.log("i: " + i + ", j: " + j + " co cheo trai: " + this.checkLeftDiagonal(i, j, squares) + " co cheo phai: " + this.checkRightDiagonal(i,j,squares));
    let tempWinner;

    if (
      checkRow(i, j, squares) >= 5 ||
      checkColumn(i, j, squares) >= 5 ||
      checkLeftDiagonal(i, j, squares) >= 5 ||
      checkRightDiagonal(i, j, squares) >= 5
    ) {
      tempWinner = p_xIsNext ? playerA : playerB;
    } else {
      tempWinner = null;
    }
    winner = tempWinner;
  };

  const onSquareClick = (i, j) => {
    const history = p_history.slice(0, p_step + 1);
    const current = history[p_step];
    const newSquares = current.squares.slice();
    current.squares.map((row, idx) => {
      newSquares[idx] = current.squares[idx].slice();
      return true;
    });
    // if (newSquares[i][j] || prevState.winner) return;
    if (newSquares[i][j]) return;
    newSquares[i][j] = p_xIsNext ? playerA : playerB;
    p_clickSquare(
      history.concat([
        {
          squares: newSquares,
          location: { x: i, y: j },
        },
      ]),
    );
    checkWinner(i, j, newSquares);
  };

  // jumpTo(step, squares) {
  const jumpTo = step => {
    const { history } = p_history;
    const current = history[step];

    p_changeStep(step);
    if (step !== 0) checkWinner(current.location.x, current.location.y, current.squares);
  };

  const sortMoveList = () => {
    p_sortMoves(!p_isDescending);
  };

  let status;
  let moves;
  const history = p_history;
  const current = history[p_step];

  moves = history.map((step, move) => {
    const desc = move
      ? `Go to move #${move} at (${step.location.x}, ${step.location.y})`
      : 'Go to game start';
    const uniqueMove = move ? ` ${step.location.x} + '_' + ${step.location.y} ` : '0';
    return (
      <li key={uniqueMove}>
        {/* <button className="step" onClick={() => this.jumpTo(move, current.squares)}>{desc}</button> */}
        <button type="button" className="step" onClick={() => jumpTo(move)}>
          {desc}
        </button>
      </li>
    );
  });

  if (!p_isDescending) {
    moves = moves.reverse();
  }

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${p_xIsNext ? playerA : playerB}`;
  }

  return (
    <div className="game">
      <div className="game-board">
        <div>{status}</div>

        <button type="button" className="btn btn-primary" onClick={sortMoveList}>
          <i className="fa fa-undo" aria-hidden="true" />
          &nbsp;Sort
        </button>
        <Board1 squares={current.squares} onClick={(i, j) => onSquareClick(i, j)} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
