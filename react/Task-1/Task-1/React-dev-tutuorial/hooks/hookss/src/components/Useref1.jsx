import React, { useRef } from "react";

function Useref1() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus(); // directly access DOM
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default Useref1;
