
import { useState } from 'react';
import { Container } from '../../styles';
import { calculateWinner } from '../../utils/calculateWinner'
import Board from '../Board'
import { InstructionSpan } from './styles'


const buttonStyle = {
	'marginTop': '15px',
	'marginBottom': '16px',
	'width': '80px',
	'height': '40px',
	'backgroundColor': '#8acaca',
	'color': 'white',
	'fontSize': '16px',
}

export default function Game() {
	const [xIsNext, setxIsNext] = useState(true);
	const [squares, setSquares] = useState(Array(9).fill(null))

	const handleSquareClick = (i) => {
		const newSquares = squares.slice();
		if (calculateWinner(newSquares) || newSquares[i]) {
			return;
		}
		newSquares[i] = xIsNext ? 'X' : 'O';
		setSquares(newSquares)
		setxIsNext(!xIsNext);
	}

	const handleResetClick = () => {
		setSquares(Array(9).fill(null))
		setxIsNext(true)
	}
	
	const whoIsNext = (xIsNext) => xIsNext ? 'X' : 'O';

	return (
		<Container>
			<div id="statusArea">
				Next player: <InstructionSpan>{whoIsNext(xIsNext)}</InstructionSpan>
			</div>
			<div id="winnerArea">
				Winner: <InstructionSpan>{calculateWinner(squares)}</InstructionSpan>
			</div>
			<Board
				squares={squares}
				onClick={(i) => handleSquareClick(i)}
			/>
			<button style={buttonStyle} onClick={handleResetClick}>Reset</button>
		</Container>
	);
}
