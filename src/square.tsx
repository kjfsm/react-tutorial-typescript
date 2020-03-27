import React from "react";

interface SquareProps {
  value: string;
  onClick: any;
}

const Square: React.FC<SquareProps> = (props: SquareProps) => {
  console.log(props.value);
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
};

export default Square;
