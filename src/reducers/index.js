import { combineReducers } from 'redux';
import history from './history';
import isDescending from './isDescending';
import step from './step';
import xIsNext from './xIsNext';

const caroApp = combineReducers({
  history,
  isDescending,
  step,
  xIsNext,
});

export default caroApp;
