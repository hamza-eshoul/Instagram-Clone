import React from "react";
import MainHome from "./Main/MainHome";
import Sidebar from "./Main/Sidebar";

const Main = () => {
  return (
    <div className="flex w-screen">
      <Sidebar />
      <MainHome />
    </div>
  );
};

export default Main;
