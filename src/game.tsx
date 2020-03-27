import React, { useState } from "react";
import Board, { Step } from "./board";

const Game: React.FC = () => {
  const [history, setHistory] = useState<Step[]>([
    { squares: Array<string>(9).fill("") }
  ]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i: number) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setHistory(
      newHistory.concat([
        {
          squares: squares
        }
      ])
    );
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (stepNumber: number) => {
    setStepNumber(stepNumber);
    setXIsNext(stepNumber % 2 === 0);
  };
  const newHistory = history;
  const current = newHistory[stepNumber];
  const winner = calculateWinner(current.squares);

  let status: string;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          handleClick={handleClick}
          history={history}
          xIsNext={xIsNext}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>
          {history.map((_, move) => {
            const desc = move ? "Go to #" + move : "Goto game start";
            return (
              <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

const calculateWinner = (squares: string[]): string => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return "";
};

export default Game;
