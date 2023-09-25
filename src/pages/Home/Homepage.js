import { useState } from "react";

// components
import HomepageBody from "./HomepageBody";
import Sidebar from "./Sidebar";
import Explore from "./Explore";
import CreatePost from "./CreatePost";

const Homepage = ({
  isDarkModeActive,
  setIsDarkModeActive,
  activeProfile,
  setActiveProfile,
  userInfo,
  isSearchActive,
  setIsSearchActive,
  fetchSearchProfile,
}) => {
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

      {isAddingPost && (
        <CreatePost
          isAddingPost={isAddingPost}
          setIsAddingPost={setIsAddingPost}
        />
      )}

      {isExploreActive ? (
        ""
      ) : (
        <HomepageBody
          isReelVideoActive={isReelVideoActive}
          setIsReelVideoActive={setIsReelVideoActive}
        />
      )}

      {isExploreActive ? <Explore setActiveProfile={setActiveProfile} /> : ""}
    </div>
  );
};

export default Homepage;
