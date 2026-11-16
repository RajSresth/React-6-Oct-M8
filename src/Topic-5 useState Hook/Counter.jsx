import {useState} from "react"

const Counter = () => {
   const [ count, setCount] = useState(0);
    // React State Variable

  const handleIncrease = () => {
        setCount(count + 1)
};

const handleDecrease = () => {
   setCount(count - 1);
    console.log("count:",count);
  };

  console.log("Counter Component")

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};

export default Counter;


// ? whenever state variable changes react will rerender(re-call) the Component.