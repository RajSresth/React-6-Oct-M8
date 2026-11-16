import { useContext } from "react";
import Child from "./Child";
import ThemeContext from "./context/ThemeContext";

const Parent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="parent">
      <h3>Parent: {theme}</h3>

      <Child />
    </div>
  );
};

export default Parent;
