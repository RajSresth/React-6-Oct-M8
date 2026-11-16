import { useRef } from "react";

const Login = () => {
  const searchTextRef = useRef(); 
  // searchTextRef = { current: <input /> }

  const handleClick = () => {
    console.log(searchTextRef.current.value);
  };

  console.log("Login Component")

  return (
    <div>
      <input 
       type="text" 
       ref={searchTextRef} 
       placeholder="Search here..."
     />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default Login;
