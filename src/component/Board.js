import React, {useState} from 'react';
import Square from "./Square";
import "./Board.css";

const Board = () => {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  
  
  const handleClick = (i) => {
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O' ;
    setSquares(newSquares);
    setXIsNext(!xIsNext);
    // 위와 같은 코드이나 약간의 차이가 있다. 위처럼 하면 두 번 반복해도 한 번 동작하고, prev를 이용하면 두 번이 따로 다 동작한다.
    // setXIsNext(prev => !prev);
  }
  
  const renderSquare = (i) => {
    return <Square value={squares[i]}
                   onClick={() => handleClick(i)} />
  }
  
  const status = `Next Player : ${xIsNext ? 'X' : 'O'} ` ;
  
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
