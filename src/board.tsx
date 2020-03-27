import React from "react";
import Square from "./square";

export interface Step {
  squares: string[];
}

interface BoardProps {
  history: Step[];
  squares: string[];
  handleClick: (i: number) => void;
  xIsNext: boolean;
}

const Board: React.FC<BoardProps> = (props: BoardProps) => {
  const renderSquare = (i: number) => {
    return (
      <Square
        number={i}
        value={props.squares[i]}
        handleClick={props.handleClick}
      />
    );
  };

  return (
    <div>
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
};

export default Board;
