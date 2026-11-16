import { useState, useMemo, useCallback } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [searchText, setSearchText] = useState("");

  const user = useMemo(() => {
    return {fullname: "Chombu"}
  }, [])

  const handleClick = useCallback(() => {
    setCount(count + 1)
  }, [])

  // handleClick = 01x1 count = 0
  // handleClick = 02x2 count = 1
  // handleClick = 03x3 count = 2


  console.log("Parent Component");

  return (
    <div id="parent">

      <div id="counter">
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Add</button>
      </div>
        
      <div id="search">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search here..."
        />
        <h3>Your Query: {searchText}</h3>
      </div>

      <div id="child">
        <Child1 user={ user } handleClick={handleClick}/>
      </div>
      <div id="child">
        <Child2/>
      </div>
    </div>
  );
};

export default Parent;



/**
 * Component Re-render
 * 1. state variable update
 * 2. new props
 */

/**
 * Parent (count = 0)
 *   const [count, setCount] = useState(0);
 *
 *     <Child products={ ["Hello", "Dev"] } />
 *     <Child products={//? 01x1} />
 * 
 * Parent (count = 1)
 *   const [count, setCount] = useState(0);
 * 
 *  <Child products={ ["Hello", "Dev"] } />
 *  <Child products={ //? 02x2 } />
 */

/**
 *  prev === next
 * 01x1 === 02x2
 */


