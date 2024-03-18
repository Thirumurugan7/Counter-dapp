import React, { useState } from "react";
import { increment, decrement, getCounter } from "../config/integration";
const Counter = () => {
  const [num, setNum] = useState("");
  const handleIncrement = async () => {
    const counter = await increment();
    console.log(counter);
    setNum(counter.toString());
  };

  const handleDecrement = async () => {
    const counter = await decrement();
    console.log(counter);
    setNum(counter.toString());
  };

  const handleGetCounter = async () => {
    const counter = await getCounter();
    console.log(counter);
    setNum(counter.toString());
  };

  return (
    <div>
      <div className="container">
        <button className="btn" onClick={handleIncrement}>
          Increment
        </button>
        <button className="btn" onClick={handleDecrement}>
          Decrement
        </button>
        <button className="btn" onClick={handleGetCounter}>
          Get Counter
        </button>
      </div>

      <button className="btn">{num}</button>
    </div>
  );
};

export default Counter;
