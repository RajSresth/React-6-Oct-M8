import React from "react";

const Child2 = () => {
  console.log("Child2 Component");
  return <div>I am Child2 Component</div>;
};

export default React.memo(Child2);



