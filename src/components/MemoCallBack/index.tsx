import React, { useCallback } from "react";
import Button from "./Button";
import TextValue from "./TextValue";

const MemoCallBack = () => {
  const [value, setValue] = React.useState<number>(0);
  const [hoverValue, setHoverValue] = React.useState<number>(0);

  const handleClick = useCallback(() => {
    console.log("here");
    setValue((prev) => prev + 1);
  }, []);

  const handleHover = useCallback(() => {
    console.log("here2");
    setHoverValue((prev) => prev + 1);
  }, []);

  const getValue = React.useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++;
    return value % 2 === 0;
  }, [value]);

  return (
    <div>
      <h1>This is for Memo CallBack function practice module:</h1>
      <div>
        <span>{getValue ? "Even" : "Odd"}</span>
        <TextValue value={value} text="Clicked" />
        <Button text="Click Here" value={value} handleClick={handleClick} />
      </div>
      <hr />
      <div>
        <TextValue value={hoverValue} text="Hovered" />
        <Button
          text="Hover Here"
          value={hoverValue}
          handleClick={handleHover}
        />
      </div>
    </div>
  );
};

export default MemoCallBack;
