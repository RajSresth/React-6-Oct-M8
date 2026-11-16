import { createContext, useState } from "react";

// 1. create context
const AuthContext = createContext();

// 2. create provider component

export const AuthProvider = (props) => {
  const [login, setLogin] = useState(false);

  return (
    <AuthContext.Provider value={{ login, setLogin }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
