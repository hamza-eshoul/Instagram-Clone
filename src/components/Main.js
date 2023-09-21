import React, { useEffect, useState } from "react";
import MainHome from "./Main/MainHome";
import Sidebar from "./Main/Sidebar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";
import Explore from "./Main/Explore";

const Main = ({
  isDarkModeActive,
  setIsDarkModeActive,
  activeProfile,
  setActiveProfile,
  userInfo,
  setUserInfo,
  isSearchActive,
  setIsSearchActive,
  fetchSearchProfile,
  setFetchSearchProfile,
}) => {
  useEffect(() => {
    setFetchSearchProfile(false);
  }, []);

  // subscribing to auth changes

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserInfo(user);
    }
  });

  const [isAddingPost, setIsAddingPost] = useState(false);
  const [isExploreActive, setIsExploreActive] = useState(false);
  const [isReelVideoActive, setIsReelVideoActive] = useState(false);

  return (
    <div className="flex w-screen dark:bg-hardDark">
      <Sidebar
        isDarkModeActive={isDarkModeActive}
        setIsDarkModeActive={setIsDarkModeActive}
        setActiveProfile={setActiveProfile}
        activeProfile={activeProfile}
        userInfo={userInfo}
        isAddingPost={isAddingPost}
        setIsAddingPost={setIsAddingPost}
        isSearchActive={isSearchActive}
        setIsSearchActive={setIsSearchActive}
        fetchSearchProfile={fetchSearchProfile}
        setIsExploreActive={setIsExploreActive}
        setIsReelVideoActive={setIsReelVideoActive}
      />

      {isExploreActive ? (
        ""
      ) : (
        <MainHome
          isDarkModeActive={isDarkModeActive}
          activeProfile={activeProfile}
          setActiveProfile={setActiveProfile}
          userInfo={userInfo}
          isAddingPost={isAddingPost}
          setIsAddingPost={setIsAddingPost}
          isReelVideoActive={isReelVideoActive}
          setIsReelVideoActive={setIsReelVideoActive}
        />
      )}

      {isExploreActive ? <Explore setActiveProfile={setActiveProfile} /> : ""}
    </div>
  );
};

export default Main;
