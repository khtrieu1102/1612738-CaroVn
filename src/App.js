import React, { Component } from 'react';
import './App.css';
import Board1 from './components/board1';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: [
            [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            ],
            [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            ],
            [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            ],
            [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            ],
            [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            ],
            [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            ],
            [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            ],
            [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            ],
            [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            ],
            [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            ],
            [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            ],
            [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            ],
            [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            ],
            [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            ],
            [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            ],
            [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            ],
            [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            ],
            [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            ],
            [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            ],
            [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            ],
          ],
          location: null,
        },
      ],
      xIsNext: true,
      winner: null,
      playerA: 'X',
      playerB: 'O',
      stepNumber: 0,
      isDescending: false,
    };
    this.sortMoveList = this.sortMoveList.bind(this);
  }

  onSquareClick(i, j) {
    this.setState(prevState => {
      const history = prevState.history.slice(0, prevState.stepNumber + 1);
      const current = history[prevState.stepNumber];
      const newSquares = current.squares.slice();
      current.squares.map((row, idx) => {
        newSquares[idx] = current.squares[idx].slice();
        return true;
      });
      if (newSquares[i][j] || prevState.winner) return;
      newSquares[i][j] = prevState.xIsNext ? prevState.playerA : prevState.playerB;
      this.setState({
        stepNumber: history.length,
        xIsNext: !prevState.xIsNext,
        history: history.concat([
          {
            squares: newSquares,
            location: { x: i, y: j },
          },
        ]),
      });
      this.checkWinner(i, j, newSquares);
    });
  }

  // jumpTo(step, squares) {
  jumpTo(step) {
    const { history } = this.state;
    const current = history[step];

    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
    if (step !== 0) this.checkWinner(current.location.x, current.location.y, current.squares);
  }

  sortMoveList() {
    this.setState(prevState => {
      this.setState({ isDescending: !prevState.isDescending });
    });
  }

  checkWinner(i, j, squares) {
    // console.log("i: " + i + ", j: " + j + " co cheo trai: " + this.checkLeftDiagonal(i, j, squares) + " co cheo phai: " + this.checkRightDiagonal(i,j,squares));
    let tempWinner;
    const { xIsNext, playerA, playerB } = this.state;

    if (
      this.checkRow(i, j, squares) >= 5 ||
      this.checkColumn(i, j, squares) >= 5 ||
      this.checkLeftDiagonal(i, j, squares) >= 5 ||
      this.checkRightDiagonal(i, j, squares) >= 5
    ) {
      tempWinner = xIsNext ? playerA : playerB;
    } else {
      tempWinner = null;
    }
    this.setState({
      winner: tempWinner,
    });
  }

  checkRow(i, j, squares) {
    let tempJ;
    let rowCount = 0;
    const { xIsNext, playerA, playerB } = this.state;
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
    const enemy = xIsNext ? playerB : playerA;
    if (rowCount >= 5) {
      if (squares[i][start - 1] === enemy && squares[i][end + 1] === enemy) {
        return 0;
      }
      return rowCount;
    }
    return rowCount;
  }

  checkColumn(i, j, squares) {
    let TempI;
    let colCount = 0;
    const { xIsNext, playerA, playerB } = this.state;
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
    const enemy = xIsNext ? playerB : playerA;
    if (colCount >= 5) {
      if (start > 0 && squares[start - 1][j] === enemy && squares[end + 1][j] === enemy) {
        return 0;
      }
      return colCount;
    }
    return colCount;
  }

  checkLeftDiagonal(i, j, squares) {
    let count = 0;
    let index = 0;
    const { xIsNext, playerA, playerB } = this.state;

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
    const enemy = xIsNext ? playerB : playerA;
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
  }

  checkRightDiagonal(i, j, squares) {
    let count = 0;
    let index = 0;
    const { xIsNext, playerA, playerB } = this.state;
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
    const enemy = xIsNext ? playerB : playerA;
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
  }

  render() {
    let status;
    let moves;
    const { history, isDescending, winner, xIsNext, stepNumber } = this.state;
    const current = history[stepNumber];

    // moves = history.map((step, move) => {
    //   const desc = move
    //     ? `Go to move #${move} at (${step.location.x}, ${step.location.y})`
    //     : 'Go to game start';
    //   return (
    //     <li key={move}>
    //       {/* <button className="step" onClick={() => this.jumpTo(move, current.squares)}>{desc}</button> */}
    //       <button type="button" className="step" onClick={() => this.jumpTo(move)}>
    //         {desc}
    //       </button>
    //     </li>
    //   );
    // });

    if (isDescending) {
      moves = moves.reverse();
    }

    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <div>{status}</div>

          <button type="button" className="btn btn-primary" onClick={this.sortMoveList}>
            <i className="fa fa-undo" aria-hidden="true" />
            &nbsp;Sort
          </button>
          <Board1 squares={current.squares} onClick={(i, j) => this.onSquareClick(i, j)} />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
