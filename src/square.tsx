import React from "react";

interface SquareProps {
  value: string;
  handleClick: (i: number) => void;
  number: number;
}

const Square: React.FC<SquareProps> = (props: SquareProps) => {
  console.log(props.value);
  return (
    <button className="square" onClick={() => props.handleClick(props.number)}>
      {props.value}
    </button>
  );
};

export default Square;
