import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";

const App = () => {
  return (
    <div>
      <BrowserRouter basename="/">
        {" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
