import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const RootLayout = () => {
  return <div>
      <Header/>

      <main className="min-h-[calc(100vh-80px)] w-full">
        <Outlet/>
      </main>
  </div>;
};

export default RootLayout;
