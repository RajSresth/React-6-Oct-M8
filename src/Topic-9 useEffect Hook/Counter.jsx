import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 0) return;
    console.log("useEffect");
  }, [count]);

  console.log("Counter Component");

  return (
    <div id="counter">
      <h2>Counter Component</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
};

export default Counter;
/**
 *
 * count = 0    , deps = [0]
 *    <Counter/>
 *        1. Counter Component
 *        2. use Effect
 *
 *
 * Add button clicked
 *   count = 1,  deps = [1]
 *      <Counter/>
 *           1. Counter Component
 *           2. useEffect
 */
