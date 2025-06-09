"use client";

import { useState } from "react";

function Counter({ data }) {
  const [counter, setCounter] = useState(1);

  return (
    <>
      <p>{data[0].name}</p>
      <p>{counter}</p>
      <button onClick={() => setCounter((c) => c + 1)}>+</button>
    </>
  );
}

export default Counter;
