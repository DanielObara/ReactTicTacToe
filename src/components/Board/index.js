import React from 'react'
import Square from '../Squares'
import { Container } from '../../styles'
import { BoardContainer, Row } from './styles'

export default function Board({ squares, onClick }) {
	const renderSquare = (i) => {
		return (
			<Square
				value={squares[i]}
				onClick={() => onClick(i)}
			/>
		);
	}
	return (
		<Container>
			<BoardContainer>
				<Row>
					{renderSquare(0)}
					{renderSquare(1)}
					{renderSquare(2)}
				</Row>
				<Row>
					{renderSquare(3)}
					{renderSquare(4)}
					{renderSquare(5)}
				</Row>
				<Row>
					{renderSquare(6)}
					{renderSquare(7)}
					{renderSquare(8)}
				</Row>
			</BoardContainer>
		</Container>
	)
}