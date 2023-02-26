import React, { ReactNode } from "react";

interface Props {
  value: number
  text: string
}

const TextValue = ({value, text }: Props) => {
  console.log(text ,value);
  return <div>Count Value is: {value}</div>;
};

export default React.memo(TextValue);
