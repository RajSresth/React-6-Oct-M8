import { useState } from "react";
import Counter from "./Counter";

const Toggle = () => {
  const [show, setShow] = useState(false);

  // const handleClick = () => setShow(!show);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle Button</button>
      {show && <Counter />}
    </div>
  );
};

export default Toggle;
