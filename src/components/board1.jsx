import React, { Component } from 'react';
import Square from './square';

/* eslint-disable */

class Board1 extends Component {
  renderSquare(i, j) {
    const { squares } = this.props;
    return <Square value={squares[i][j]} onClick={() => this.props.onClick(i, j)} />;
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0, 0)}
          {this.renderSquare(0, 1)}
          {this.renderSquare(0, 2)}
          {this.renderSquare(0, 3)}
          {this.renderSquare(0, 4)}
          {this.renderSquare(0, 5)}
          {this.renderSquare(0, 6)}
          {this.renderSquare(0, 7)}
          {this.renderSquare(0, 8)}
          {this.renderSquare(0, 9)}
          {this.renderSquare(0, 10)}
          {this.renderSquare(0, 11)}
          {this.renderSquare(0, 12)}
          {this.renderSquare(0, 13)}
          {this.renderSquare(0, 14)}
          {this.renderSquare(0, 15)}
          {this.renderSquare(0, 16)}
          {this.renderSquare(0, 17)}
          {this.renderSquare(0, 18)}
          {this.renderSquare(0, 19)}
        </div>
        <div className="board-row">
          {this.renderSquare(1, 0)}
          {this.renderSquare(1, 1)}
          {this.renderSquare(1, 2)}
          {this.renderSquare(1, 3)}
          {this.renderSquare(1, 4)}
          {this.renderSquare(1, 5)}
          {this.renderSquare(1, 6)}
          {this.renderSquare(1, 7)}
          {this.renderSquare(1, 8)}
          {this.renderSquare(1, 9)}
          {this.renderSquare(1, 10)}
          {this.renderSquare(1, 11)}
          {this.renderSquare(1, 12)}
          {this.renderSquare(1, 13)}
          {this.renderSquare(1, 14)}
          {this.renderSquare(1, 15)}
          {this.renderSquare(1, 16)}
          {this.renderSquare(1, 17)}
          {this.renderSquare(1, 18)}
          {this.renderSquare(1, 19)}
        </div>
        <div className="board-row">
          {this.renderSquare(2, 0)}
          {this.renderSquare(2, 1)}
          {this.renderSquare(2, 2)}
          {this.renderSquare(2, 3)}
          {this.renderSquare(2, 4)}
          {this.renderSquare(2, 5)}
          {this.renderSquare(2, 6)}
          {this.renderSquare(2, 7)}
          {this.renderSquare(2, 8)}
          {this.renderSquare(2, 9)}
          {this.renderSquare(2, 10)}
          {this.renderSquare(2, 11)}
          {this.renderSquare(2, 12)}
          {this.renderSquare(2, 13)}
          {this.renderSquare(2, 14)}
          {this.renderSquare(2, 15)}
          {this.renderSquare(2, 16)}
          {this.renderSquare(2, 17)}
          {this.renderSquare(2, 18)}
          {this.renderSquare(2, 19)}
        </div>

        <div className="board-row">
          {this.renderSquare(3, 0)}
          {this.renderSquare(3, 1)}
          {this.renderSquare(3, 2)}
          {this.renderSquare(3, 3)}
          {this.renderSquare(3, 4)}
          {this.renderSquare(3, 5)}
          {this.renderSquare(3, 6)}
          {this.renderSquare(3, 7)}
          {this.renderSquare(3, 8)}
          {this.renderSquare(3, 9)}
          {this.renderSquare(3, 10)}
          {this.renderSquare(3, 11)}
          {this.renderSquare(3, 12)}
          {this.renderSquare(3, 13)}
          {this.renderSquare(3, 14)}
          {this.renderSquare(3, 15)}
          {this.renderSquare(3, 16)}
          {this.renderSquare(3, 17)}
          {this.renderSquare(3, 18)}
          {this.renderSquare(3, 19)}
        </div>
        <div className="board-row">
          {this.renderSquare(4, 0)}
          {this.renderSquare(4, 1)}
          {this.renderSquare(4, 2)}
          {this.renderSquare(4, 3)}
          {this.renderSquare(4, 4)}
          {this.renderSquare(4, 5)}
          {this.renderSquare(4, 6)}
          {this.renderSquare(4, 7)}
          {this.renderSquare(4, 8)}
          {this.renderSquare(4, 9)}
          {this.renderSquare(4, 10)}
          {this.renderSquare(4, 11)}
          {this.renderSquare(4, 12)}
          {this.renderSquare(4, 13)}
          {this.renderSquare(4, 14)}
          {this.renderSquare(4, 15)}
          {this.renderSquare(4, 16)}
          {this.renderSquare(4, 17)}
          {this.renderSquare(4, 18)}
          {this.renderSquare(4, 19)}
        </div>
        <div className="board-row">
          {this.renderSquare(5, 0)}
          {this.renderSquare(5, 1)}
          {this.renderSquare(5, 2)}
          {this.renderSquare(5, 3)}
          {this.renderSquare(5, 4)}
          {this.renderSquare(5, 5)}
          {this.renderSquare(5, 6)}
          {this.renderSquare(5, 7)}
          {this.renderSquare(5, 8)}
          {this.renderSquare(5, 9)}
          {this.renderSquare(5, 10)}
          {this.renderSquare(5, 11)}
          {this.renderSquare(5, 12)}
          {this.renderSquare(5, 13)}
          {this.renderSquare(5, 14)}
          {this.renderSquare(5, 15)}
          {this.renderSquare(5, 16)}
          {this.renderSquare(5, 17)}
          {this.renderSquare(5, 18)}
          {this.renderSquare(5, 19)}
        </div>
        <div className="board-row">
          {this.renderSquare(6, 0)}
          {this.renderSquare(6, 1)}
          {this.renderSquare(6, 2)}
          {this.renderSquare(6, 3)}
          {this.renderSquare(6, 4)}
          {this.renderSquare(6, 5)}
          {this.renderSquare(6, 6)}
          {this.renderSquare(6, 7)}
          {this.renderSquare(6, 8)}
          {this.renderSquare(6, 9)}
          {this.renderSquare(6, 10)}
          {this.renderSquare(6, 11)}
          {this.renderSquare(6, 12)}
          {this.renderSquare(6, 13)}
          {this.renderSquare(6, 14)}
          {this.renderSquare(6, 15)}
          {this.renderSquare(6, 16)}
          {this.renderSquare(6, 17)}
          {this.renderSquare(6, 18)}
          {this.renderSquare(6, 19)}
        </div>
        <div className="board-row">
          {this.renderSquare(7, 0)}
          {this.renderSquare(7, 1)}
          {this.renderSquare(7, 2)}
          {this.renderSquare(7, 3)}
          {this.renderSquare(7, 4)}
          {this.renderSquare(7, 5)}
          {this.renderSquare(7, 6)}
          {this.renderSquare(7, 7)}
          {this.renderSquare(7, 8)}
          {this.renderSquare(7, 9)}
          {this.renderSquare(7, 10)}
          {this.renderSquare(7, 11)}
          {this.renderSquare(7, 12)}
          {this.renderSquare(7, 13)}
          {this.renderSquare(7, 14)}
          {this.renderSquare(7, 15)}
          {this.renderSquare(7, 16)}
          {this.renderSquare(7, 17)}
          {this.renderSquare(7, 18)}
          {this.renderSquare(7, 19)}
        </div>

        <div className="board-row">
          {this.renderSquare(8, 0)}
          {this.renderSquare(8, 1)}
          {this.renderSquare(8, 2)}
          {this.renderSquare(8, 3)}
          {this.renderSquare(8, 4)}
          {this.renderSquare(8, 5)}
          {this.renderSquare(8, 6)}
          {this.renderSquare(8, 7)}
          {this.renderSquare(8, 8)}
          {this.renderSquare(8, 9)}
          {this.renderSquare(8, 10)}
          {this.renderSquare(8, 11)}
          {this.renderSquare(8, 12)}
          {this.renderSquare(8, 13)}
          {this.renderSquare(8, 14)}
          {this.renderSquare(8, 15)}
          {this.renderSquare(8, 16)}
          {this.renderSquare(8, 17)}
          {this.renderSquare(8, 18)}
          {this.renderSquare(8, 19)}
        </div>
        <div className="board-row">
          {this.renderSquare(9, 0)}
          {this.renderSquare(9, 1)}
          {this.renderSquare(9, 2)}
          {this.renderSquare(9, 3)}
          {this.renderSquare(9, 4)}
          {this.renderSquare(9, 5)}
          {this.renderSquare(9, 6)}
          {this.renderSquare(9, 7)}
          {this.renderSquare(9, 8)}
          {this.renderSquare(9, 9)}
          {this.renderSquare(9, 10)}
          {this.renderSquare(9, 11)}
          {this.renderSquare(9, 12)}
          {this.renderSquare(9, 13)}
          {this.renderSquare(9, 14)}
          {this.renderSquare(9, 15)}
          {this.renderSquare(9, 16)}
          {this.renderSquare(9, 17)}
          {this.renderSquare(9, 18)}
          {this.renderSquare(9, 19)}
        </div>
        <div className="board-row">
          {this.renderSquare(10, 0)}
          {this.renderSquare(10, 1)}
          {this.renderSquare(10, 2)}
          {this.renderSquare(10, 3)}
          {this.renderSquare(10, 4)}
          {this.renderSquare(10, 5)}
          {this.renderSquare(10, 6)}
          {this.renderSquare(10, 7)}
          {this.renderSquare(10, 8)}
          {this.renderSquare(10, 9)}
          {this.renderSquare(10, 10)}
          {this.renderSquare(10, 11)}
          {this.renderSquare(10, 12)}
          {this.renderSquare(10, 13)}
          {this.renderSquare(10, 14)}
          {this.renderSquare(10, 15)}
          {this.renderSquare(10, 16)}
          {this.renderSquare(10, 17)}
          {this.renderSquare(10, 18)}
          {this.renderSquare(10, 19)}
        </div>
        <div className="board-row">
          {this.renderSquare(11, 0)}
          {this.renderSquare(11, 1)}
          {this.renderSquare(11, 2)}
          {this.renderSquare(11, 3)}
          {this.renderSquare(11, 4)}
          {this.renderSquare(11, 5)}
          {this.renderSquare(11, 6)}
          {this.renderSquare(11, 7)}
          {this.renderSquare(11, 8)}
          {this.renderSquare(11, 9)}
          {this.renderSquare(11, 10)}
          {this.renderSquare(11, 11)}
          {this.renderSquare(11, 12)}
          {this.renderSquare(11, 13)}
          {this.renderSquare(11, 14)}
          {this.renderSquare(11, 15)}
          {this.renderSquare(11, 16)}
          {this.renderSquare(11, 17)}
          {this.renderSquare(11, 18)}
          {this.renderSquare(11, 19)}
        </div>
        <div className="board-row">
          {this.renderSquare(12, 0)}
          {this.renderSquare(12, 1)}
          {this.renderSquare(12, 2)}
          {this.renderSquare(12, 3)}
          {this.renderSquare(12, 4)}
          {this.renderSquare(12, 5)}
          {this.renderSquare(12, 6)}
          {this.renderSquare(12, 7)}
          {this.renderSquare(12, 8)}
          {this.renderSquare(12, 9)}
          {this.renderSquare(12, 10)}
          {this.renderSquare(12, 11)}
          {this.renderSquare(12, 12)}
          {this.renderSquare(12, 13)}
          {this.renderSquare(12, 14)}
          {this.renderSquare(12, 15)}
          {this.renderSquare(12, 16)}
          {this.renderSquare(12, 17)}
          {this.renderSquare(12, 18)}
          {this.renderSquare(12, 19)}
        </div>

        <div className="board-row">
          {this.renderSquare(13, 0)}
          {this.renderSquare(13, 1)}
          {this.renderSquare(13, 2)}
          {this.renderSquare(13, 3)}
          {this.renderSquare(13, 4)}
          {this.renderSquare(13, 5)}
          {this.renderSquare(13, 6)}
          {this.renderSquare(13, 7)}
          {this.renderSquare(13, 8)}
          {this.renderSquare(13, 9)}
          {this.renderSquare(13, 10)}
          {this.renderSquare(13, 11)}
          {this.renderSquare(13, 12)}
          {this.renderSquare(13, 13)}
          {this.renderSquare(13, 14)}
          {this.renderSquare(13, 15)}
          {this.renderSquare(13, 16)}
          {this.renderSquare(13, 17)}
          {this.renderSquare(13, 18)}
          {this.renderSquare(13, 19)}
        </div>
        <div className="board-row">
          {this.renderSquare(14, 0)}
          {this.renderSquare(14, 1)}
          {this.renderSquare(14, 2)}
          {this.renderSquare(14, 3)}
          {this.renderSquare(14, 4)}
          {this.renderSquare(14, 5)}
          {this.renderSquare(14, 6)}
          {this.renderSquare(14, 7)}
          {this.renderSquare(14, 8)}
          {this.renderSquare(14, 9)}
          {this.renderSquare(14, 10)}
          {this.renderSquare(14, 11)}
          {this.renderSquare(14, 12)}
          {this.renderSquare(14, 13)}
          {this.renderSquare(14, 14)}
          {this.renderSquare(14, 15)}
          {this.renderSquare(14, 16)}
          {this.renderSquare(14, 17)}
          {this.renderSquare(14, 18)}
          {this.renderSquare(14, 19)}
        </div>
        <div className="board-row">
          {this.renderSquare(15, 0)}
          {this.renderSquare(15, 1)}
          {this.renderSquare(15, 2)}
          {this.renderSquare(15, 3)}
          {this.renderSquare(15, 4)}
          {this.renderSquare(15, 5)}
          {this.renderSquare(15, 6)}
          {this.renderSquare(15, 7)}
          {this.renderSquare(15, 8)}
          {this.renderSquare(15, 9)}
          {this.renderSquare(15, 10)}
          {this.renderSquare(15, 11)}
          {this.renderSquare(15, 12)}
          {this.renderSquare(15, 13)}
          {this.renderSquare(15, 14)}
          {this.renderSquare(15, 15)}
          {this.renderSquare(15, 16)}
          {this.renderSquare(15, 17)}
          {this.renderSquare(15, 18)}
          {this.renderSquare(15, 19)}
        </div>
        <div className="board-row">
          {this.renderSquare(16, 0)}
          {this.renderSquare(16, 1)}
          {this.renderSquare(16, 2)}
          {this.renderSquare(16, 3)}
          {this.renderSquare(16, 4)}
          {this.renderSquare(16, 5)}
          {this.renderSquare(16, 6)}
          {this.renderSquare(16, 7)}
          {this.renderSquare(16, 8)}
          {this.renderSquare(16, 9)}
          {this.renderSquare(16, 10)}
          {this.renderSquare(16, 11)}
          {this.renderSquare(16, 12)}
          {this.renderSquare(16, 13)}
          {this.renderSquare(16, 14)}
          {this.renderSquare(16, 15)}
          {this.renderSquare(16, 16)}
          {this.renderSquare(16, 17)}
          {this.renderSquare(16, 18)}
          {this.renderSquare(16, 19)}
        </div>
        <div className="board-row">
          {this.renderSquare(17, 0)}
          {this.renderSquare(17, 1)}
          {this.renderSquare(17, 2)}
          {this.renderSquare(17, 3)}
          {this.renderSquare(17, 4)}
          {this.renderSquare(17, 5)}
          {this.renderSquare(17, 6)}
          {this.renderSquare(17, 7)}
          {this.renderSquare(17, 8)}
          {this.renderSquare(17, 9)}
          {this.renderSquare(17, 10)}
          {this.renderSquare(17, 11)}
          {this.renderSquare(17, 12)}
          {this.renderSquare(17, 13)}
          {this.renderSquare(17, 14)}
          {this.renderSquare(17, 15)}
          {this.renderSquare(17, 16)}
          {this.renderSquare(17, 17)}
          {this.renderSquare(17, 18)}
          {this.renderSquare(17, 19)}
        </div>

        <div className="board-row">
          {this.renderSquare(18, 0)}
          {this.renderSquare(18, 1)}
          {this.renderSquare(18, 2)}
          {this.renderSquare(18, 3)}
          {this.renderSquare(18, 4)}
          {this.renderSquare(18, 5)}
          {this.renderSquare(18, 6)}
          {this.renderSquare(18, 7)}
          {this.renderSquare(18, 8)}
          {this.renderSquare(18, 9)}
          {this.renderSquare(18, 10)}
          {this.renderSquare(18, 11)}
          {this.renderSquare(18, 12)}
          {this.renderSquare(18, 13)}
          {this.renderSquare(18, 14)}
          {this.renderSquare(18, 15)}
          {this.renderSquare(18, 16)}
          {this.renderSquare(18, 17)}
          {this.renderSquare(18, 18)}
          {this.renderSquare(18, 19)}
        </div>
        <div className="board-row">
          {this.renderSquare(19, 0)}
          {this.renderSquare(19, 1)}
          {this.renderSquare(19, 2)}
          {this.renderSquare(19, 3)}
          {this.renderSquare(19, 4)}
          {this.renderSquare(19, 5)}
          {this.renderSquare(19, 6)}
          {this.renderSquare(19, 7)}
          {this.renderSquare(19, 8)}
          {this.renderSquare(19, 9)}
          {this.renderSquare(19, 10)}
          {this.renderSquare(19, 11)}
          {this.renderSquare(19, 12)}
          {this.renderSquare(19, 13)}
          {this.renderSquare(19, 14)}
          {this.renderSquare(19, 15)}
          {this.renderSquare(19, 16)}
          {this.renderSquare(19, 17)}
          {this.renderSquare(19, 18)}
          {this.renderSquare(19, 19)}
        </div>
      </div>
    );
  }
}

export default Board1;