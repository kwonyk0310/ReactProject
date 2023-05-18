import React, {useState} from 'react';
import Square from "./Square";
import "./Board.css";

const Board = () => {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [value, setValue] = useState("");
  
  const handleClick = (i) => {
    const newSquares = squares.slice();
    newSquares[i] = 'X';
    setSquares(newSquares)
  }
  
  const renderSquare = (i) => {
    return <Square value={squares[i]}
                   onClick={() => this.handleClick(i)} />
  }

  const [status, setStatus] = useState("Next Player : X, O") ;
  
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
