import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

const SubChild = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="sub">
      <h4>SubChild: {theme} </h4>
    </div>
  );
};

export default SubChild;
