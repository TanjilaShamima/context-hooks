import React from "react";
interface Props {
    type: string
}

const Input = (props: Props, ref: any) => {
  return (
    <div>
      <input ref={ref} type={props.type} placeholder="second Input" />
    </div>
  );
};

const ForwardInput = React.forwardRef(Input)

export default ForwardInput;
