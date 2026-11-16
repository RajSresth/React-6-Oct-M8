// import Parent from "./Topic-5 useState Hooks/Parent";
// import Toggle from "./Topic-6 Conditional Rendering/Toggle";
// import Counter from "./Topic-7 useRef Hook/Counter"
// import Signup from "./Topic-8 Controlled Form/Signup";
// import Login from "./Topic-8 Controlled Form/Login";
// import Toggle from "./Topic-9 useEffect Hook/Toggle";
// import Home from "./Topic-10 API Integration/Home";
// import Parent from "./Topic-11 useMemo useCallback React.memo/Parent";
// import Parent from "./Topic-12 Context API/Parent";


import { ThemeProvider } from "./Topic-13 ContextAPI Revision/context/ThemeContext";
import Parent from "./Topic-13 ContextAPI Revision/Parent";

const App = () => {
  return (
    <div>
     <ThemeProvider>
        <Parent />
     </ThemeProvider>
    </div>
  );
};

export default App;
