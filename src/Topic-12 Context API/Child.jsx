import React, { useContext } from "react";
import Card from "./Card";
import AuthContext from "./context/AuthContext";

const Child = () => {
  const childData = useContext(AuthContext);
  console.log("childData:", childData);

  return (
    <div>
      <h3>Child Component</h3>

      <Card />
    </div>
  );
};

export default Child;
