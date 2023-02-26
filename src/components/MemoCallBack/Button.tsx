import React from "react";

interface Props {
  text: string;
  handleClick: () => void;
  value: number;
}

const Button = ({ text, handleClick, value }: Props) => {
  console.log(text, value);
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  );
};

export default React.memo(Button);
