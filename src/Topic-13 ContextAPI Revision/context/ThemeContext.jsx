import { createContext } from "react";

// 1. context create - store create
const ThemeContext = createContext();


// 2. create provider component
export const ThemeProvider = ({children}) => {

    return <ThemeContext.Provider value={{theme: "light"}}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeContext;