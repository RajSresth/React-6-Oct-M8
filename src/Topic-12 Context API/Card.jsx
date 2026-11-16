import { useContext } from "react";
import AuthContext from "./context/AuthContext";

const Card = () => {
  const { login, setLogin } = useContext(AuthContext);
  return (
    <div>
      <h4>Card Component</h4>
      {login ? <h5>Welcome User</h5> : <h5>Please Login</h5>}
      <button onClick={() => setLogin(!login)}>Toggle</button>
    </div>
  );
};

export default Card;
