import { useState } from "react";
import { useAuthContext } from "./hooks/useAuthContext";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// components
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Homepage from "./pages/Home/Homepage";
import ProfilePage from "./pages/Profile/ProfilePage";

const App = () => {
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);
  const [activeProfile, setActiveProfile] = useState("hamzaskyn");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [fetchSearchProfile, setFetchSearchProfile] = useState(false);

  // User Info
  const [userInfo, setUserInfo] = useState({});
  const { authIsReady } = useAuthContext();

  return (
    <div className={`${isDarkModeActive ? "dark" : ""}`}>
      {authIsReady && (
        <BrowserRouter basename="/">
          {" "}
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/homepage"
              element={
                <Homepage
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
              path="/profile/:profileName"
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
      )}
    </div>
  );
};

export default App;
