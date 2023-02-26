import React from "react";
import ForwardInput from "./Input";

const UseRefExample = () => {
  const [date, setDate] = React.useState<Date>(new Date());
  const timeRef = React.useRef<NodeJS.Timeout>({} as NodeJS.Timeout);
  const inputRef = React.useRef<HTMLInputElement>({} as HTMLInputElement)
  const inputRefSecond = React.useRef<HTMLInputElement>({} as HTMLInputElement)
  const tick = () => {
    setDate(new Date());
  };

  React.useEffect(() => {
    inputRef.current.focus()
    inputRefSecond.current.value = "Tanjila"
    timeRef.current = setInterval(tick, 1000);

    return () => {
        clearInterval(timeRef.current);
    };
    
  }, []);

  return (
    <div>
      <h1>This is useRef Example</h1>
      <input ref={inputRef} type="text" placeholder="Enter Something" />
      <h2>Time : {date.toLocaleTimeString()}</h2>
      <button type="button" onClick={() => clearInterval(timeRef.current)}>
        Stop Watch
      </button>
      <ForwardInput type="text" ref={inputRefSecond} />
    </div>
  );
};

export default UseRefExample;
