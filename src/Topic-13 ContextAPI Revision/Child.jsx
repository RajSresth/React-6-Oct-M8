import { useContext } from "react";
import SubChild from "./SubChild";
import ThemeContext from "./context/ThemeContext";

const Child = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div id="child">
      <h4>Child: {theme}</h4>

      <SubChild />
    </div>
  );
};

export default Child;
