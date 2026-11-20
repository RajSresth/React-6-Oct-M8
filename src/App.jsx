// import Parent from "./Topic-5 useState Hooks/Parent";
// import Toggle from "./Topic-6 Conditional Rendering/Toggle";
// import Counter from "./Topic-7 useRef Hook/Counter"
// import Signup from "./Topic-8 Controlled Form/Signup";
// import Login from "./Topic-8 Controlled Form/Login";
// import Toggle from "./Topic-9 useEffect Hook/Toggle";
// import Home from "./Topic-10 API Integration/Home";
// import Parent from "./Topic-11 useMemo useCallback React.memo/Parent";
// import Parent from "./Topic-12 Context API/Parent";
// import { ThemeProvider } from "./Topic-13 ContextAPI Revision/context/ThemeContext";
// import Parent from "./Topic-13 ContextAPI Revision/Parent";

// const App = () => {
//   return (
//     <div>
//      <ThemeProvider>
//         <Parent />
//      </ThemeProvider>
//     </div>
//   );
// };

/**
 * ! React Router Dom - 17-11-2026
// export default App;

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Topic-14 React Router DOM/RootLayout";

// Pages
import Allpage from "./Topic-14 React Router DOM/pages/Allpage";
import Homes from "./Topic-14 React Router DOM/pages/Homes";
import Experiences from "./Topic-14 React Router DOM/pages/Experiences";
import Services from "./Topic-14 React Router DOM/pages/Services";
// step-1 routing configuration

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Allpage />,
      },
      {
        path: "/homes",
        element: <Homes />,
      },
      {
        path: "/experiences",
        element: <Experiences />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
 */

/**
 * ! Basics of Routing
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Home from "./Topic-15 Routing Rivision/Home";
import About from "./Topic-15 Routing Rivision/About";
import Contact from "./Topic-15 Routing Rivision/Contact";
import NotFoundPage from "./Topic-15 Routing Rivision/NotFoundPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <NotFoundPage/>
  }
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
*/

/**
 * ! Children routes
 

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Topic-15 Routing Rivision/RootLayout";
import About from "./Topic-15 Routing Rivision/pages/About";
import Contact from "./Topic-15 Routing Rivision/pages/Contact";
import Home from "./Topic-15 Routing Rivision/pages/Home";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
*/

import React from 'react'
import AppRouting from './Topic-16 Redux Toolkit (RTK)/routes/AppRouting'
import {Provider} from "react-redux";
import store from './Topic-16 Redux Toolkit (RTK)/Redux/store';

const App = () => {
  return (

    <Provider store={store}>
      <AppRouting/>
    </Provider>
  )
}

export default App