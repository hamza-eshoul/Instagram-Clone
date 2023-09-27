import { useState } from "react";
import { useAuthContext } from "./hooks/useAuthContext";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// components
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Homepage from "./pages/Home/Homepage";
import ProfilePage from "./pages/Profile/ProfilePage";
import Sidebar from "./components/Sidebar";
import Explore from "./pages/Explore";
import ReelVideo from "./components/ReelVideo";
import CreatePost from "./components/CreatePost";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isReel, setIsReel] = useState(false);
  const [isAddPost, setIsAddPost] = useState(false);
  const { user, authIsReady } = useAuthContext();

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      {authIsReady && (
        <BrowserRouter basename="/">
          <Sidebar
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            setIsReel={setIsReel}
            setIsAddPost={setIsAddPost}
          />

          {isReel && <ReelVideo setIsReel={setIsReel} />}
          {isAddPost && <CreatePost setIsAddPost={setIsAddPost} />}

          <Routes>
            <Route
              path="/"
              element={
                user ? <Navigate to="/homepage" /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/signup"
              element={user ? <Navigate to="/homepage" /> : <Signup />}
            />
            <Route
              path="/login"
              element={user ? <Navigate to="/homepage" /> : <Login />}
            />
            <Route
              path="/homepage"
              element={user ? <Homepage setIsReel={setIsReel} /> : <Login />}
            />
            <Route path="/explore" element={user ? <Explore /> : <Login />} />
            <Route
              path="/profile/:profileName"
              element={user ? <ProfilePage /> : <Navigate to="/login" />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
