import { useState, useRef } from "react";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log("Counter Component");

  const handleClick = () => {
    countRef.current = countRef.current + 1;
  };
  return (
    <div>
      <div className="container">
        <h2>State Counter</h2>
        <h3>Count: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Add</button>
      </div>

      <div className="container">
        <h2>Ref Counter</h2>
        <h3>CountRef: {countRef.current}</h3>
        <button onClick={handleClick}>Add</button>
      </div>
    </div>
  );
};

export default Counter;
