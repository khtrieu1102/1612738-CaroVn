import { connect } from 'react-redux';
import Game from '../components/game';
import { changeStep, sortMoves, clickSquare } from '../actions/index.action';
/* eslint-disable */

const mapStateToProps = (state, ownProps) => ({
  p_history: state.history,
  p_step: state.step,
  p_xIsNext: state.xIsNext,
  p_isDescending: state.isDescending,
});

const mapDispatchToProps = {
  p_changeStep: changeStep,
  p_clickSquare: clickSquare,
  p_sortMoves: sortMoves,
};

const GameStart = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Game);

export default GameStart;
