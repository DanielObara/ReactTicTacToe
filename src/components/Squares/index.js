import React from 'react'

const squareStyle = {
	'width': '60px',
	'height': '60px',
	'backgroundColor': '#ddd',
	'margin': '4px',
	'display': 'flex',
	'justifyContent': 'center',
	'alignItems': 'center',
	'fontSize': '20px',
	'color': 'white'
}

export default function Square ({ onClick, value }) {
  return (
    <button
      onClick={onClick}
      style={squareStyle}>
      {value}
    </button>
  );
}
