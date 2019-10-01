import React from 'react';

function Square(props) {
  const { value } = props;
  return (
    <button type="button" className="square" onClick={() => props.onClick()}>
      {value}
    </button>
  );
}

export default Square;
