import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";
import ProfilePage from "./components/Profile/ProfilePage";

const App = () => {
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);
  const [activeProfile, setActiveProfile] = useState("hamzaskyn");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [fetchSearchProfile, setFetchSearchProfile] = useState(false);

  // User Info
  const [userInfo, setUserInfo] = useState({});

  return (
    <div className={`${isDarkModeActive ? "dark" : ""}`}>
      <BrowserRouter basename="/">
        {" "}
        <Routes>
          <Route
            path="/"
            element={<Home setUserInfo={setUserInfo} userInfo={userInfo} />}
          />
          <Route
            path="/main"
            element={
              <Main
                isDarkModeActive={isDarkModeActive}
                setIsDarkModeActive={setIsDarkModeActive}
                activeProfile={activeProfile}
                setActiveProfile={setActiveProfile}
                userInfo={userInfo}
                setUserInfo={setUserInfo}
                isSearchActive={isSearchActive}
                setIsSearchActive={setIsSearchActive}
                fetchSearchProfile={fetchSearchProfile}
                setFetchSearchProfile={setFetchSearchProfile}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProfilePage
                activeProfile={activeProfile}
                setActiveProfile={setActiveProfile}
                isDarkModeActive={isDarkModeActive}
                setIsDarkModeActive={setIsDarkModeActive}
                userInfo={userInfo}
                isSearchActive={isSearchActive}
                setIsSearchActive={setIsSearchActive}
                fetchSearchProfile={fetchSearchProfile}
                setFetchSearchProfile={setFetchSearchProfile}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
