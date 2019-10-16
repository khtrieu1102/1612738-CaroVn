const xIsNext = (state = true, action) => {
  switch (action.type) {
    case 'CHANGE_STEP':
      return action.step % 2 === 0;
    case 'CLICK_SQUARE':
      return !state;
    default:
      return state;
  }
};

export default xIsNext;
