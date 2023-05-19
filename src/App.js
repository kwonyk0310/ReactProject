import "./App.css";
import Board from "./component/Board";
import React, {useState} from "react";

const App = () => {
  
  const [history, setHistory] = useState([{ squares : Array(9).fill(null)}]);
  const [xIsNext, setXIsNext] = useState(true);
  
  
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }
    return null;
  }
  
  const current = history[history.length - 1];
  const winner = calculateWinner(current.squares);
  
  let status ;
  if(winner){
    status = `Winner : ${winner}`;
  }else {
    status = `Next Player : ${xIsNext ? 'X' : 'O'}`;
  }
  
  const handleClick = (i) => {
    const newSquares = current.squares.slice();
    
    // 승자가 이미 나온 경우 경기 중지(리턴), 혹은 현재 클릭한 스퀘어 안에 이미 값이 있다면 그냥 리턴
    if(calculateWinner(newSquares) || newSquares[i]){
      return;
    }
    
    newSquares[i] = xIsNext ? 'X' : 'O' ;
    setHistory([...history, {squares: newSquares}]);
    // setXIsNext(!xIsNext);
    // 위와 같은 코드이나 약간의 차이가 있다. 위처럼 하면 두 번 반복해도 한 번 동작하고, prev를 이용하면 두 번이 따로 다 동작한다.
    setXIsNext(prev => !prev);
  }
  
  
  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)}/>
      </div>
      <div className="game-info">
        <div className="status">{status}</div>
    </div>
  </div>
  );
}

export default App;
