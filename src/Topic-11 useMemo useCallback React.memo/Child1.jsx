import React from "react";

const Child1 = (props) => {

  console.log("Child1 Component");

  return <div>
    <h5>I am Child-1 Component</h5>
    <h5>Fullname: {props.user.fullname}</h5>
    <button onClick={props.handleClick}>Add</button>
  </div>;
};


export default React.memo(Child1);












// export default React.memo(Child, (prevProp = "chombu singh",nextProp = "chombu singh") => prevProp === nextProp);
