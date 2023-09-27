import { useState } from "react";
import { Link } from "react-router-dom";

// images
import defaultProfile from "../assets/images/defaultProfile.png";

// icons
import Icon from "./Icons";

// svgs
import { ReactComponent as InstaLogoSvg } from "../assets/svg/InstaLogo.svg";
import { ReactComponent as InstaImgSvg } from "../assets/svg/InstaImg.svg";
import { ReactComponent as HomeSvg } from "../assets/svg/Home.svg";
import { ReactComponent as SearchSvg } from "../assets/svg/Search.svg";
import { ReactComponent as ExploreSvg } from "../assets/svg/Explore.svg";
import { ReactComponent as ReelSvg } from "../assets/svg/Reels.svg";
import { ReactComponent as MessagesSvg } from "../assets/svg/Share.svg";
import { ReactComponent as NotificationsSvg } from "../assets/svg/Notifications.svg";
import { ReactComponent as CreateSvg } from "../assets/svg/Create.svg";

// components
import Search from "./Search";
import { useAuthContext } from "../hooks/useAuthContext";
import SidebarMenu from "./SidebarMenu";
import Toast from "./Toast";

const Sidebar = ({ isDarkMode, setIsDarkMode, setIsReel, setIsAddPost }) => {
  const [toastNotification, setToastNotification] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const { user } = useAuthContext();

  const toggleToastNotification = () => {
    setToastNotification(true);

    setTimeout(() => {
      setToastNotification(false);
    }, 5000);
  };

  if (!user) {
    return null;
  }

  return (
    <div className="fixed bottom-1 flex w-full flex-col justify-between border-t-[1px] border-instGrayish bg-white dark:border-lightDark dark:bg-black dark:text-white md:min-h-screen md:w-auto md:border-r-[1px] md:p-4">
      {/* Instagram Img & Sidebar Icons */}
      <div className="flex items-center justify-center px-0 md:flex-col md:gap-9 md:px-0">
        {/* Instagram Img */}
        <Link to="/homepage">
          {/* Insta Svg */}
          <div className="hidden md:block lg:hidden ">
            <InstaLogoSvg />
          </div>
          {/* Insta Img */}
          <div className="hidden lg:block">
            <InstaImgSvg />
          </div>
        </Link>

        {/* Search Interface */}

        {isSearchActive && <Search setIsSearchActive={setIsSearchActive} />}

        {/* Sidebar Icons */}

        <div className="flex grow justify-around gap-2 md:flex-col">
          <Link to="/homepage">
            <Icon
              icon={<HomeSvg />}
              iconText={"Home"}
              isSearchActive={isSearchActive}
            />
          </Link>

          {/* Search Functionality */}
          <div
            onClick={() => {
              setIsSearchActive(!isSearchActive);
            }}
            className="hidden md:block"
          >
            <Icon
              icon={<SearchSvg />}
              iconText={"Search"}
              isSearchActive={isSearchActive}
            />
          </div>

          <Link to="/explore">
            <Icon
              icon={<ExploreSvg />}
              iconText={"Explore"}
              isSearchActive={isSearchActive}
            />
          </Link>

          <div onClick={() => setIsReel(true)}>
            <Icon
              icon={<ReelSvg />}
              iconText={"Reels"}
              isSearchActive={isSearchActive}
            />
          </div>

          <div className="relative" onClick={() => toggleToastNotification()}>
            <Icon
              icon={<MessagesSvg />}
              iconText={"Messages"}
              isSearchActive={isSearchActive}
            />{" "}
          </div>

          <div
            className="relative hidden md:block"
            onClick={() => toggleToastNotification()}
          >
            <Icon
              icon={<NotificationsSvg />}
              iconText={"Notifications"}
              isSearchActive={isSearchActive}
            />
          </div>

          <div onClick={() => setIsAddPost(true)}>
            <Icon
              icon={<CreateSvg />}
              iconText={"Create"}
              isSearchActive={isSearchActive}
            />
          </div>

          <Link to={`/profile/${user.displayName}`}>
            <Icon
              icon={
                <div className="h-[24px] w-[24px]">
                  {" "}
                  <img
                    src={user.photoURL ? user.photoURL : defaultProfile}
                    className="rounded-xl"
                  />
                </div>
              }
              iconText={user.displayName}
              isSearchActive={isSearchActive}
            />
          </Link>
        </div>
      </div>
      <SidebarMenu isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <Toast
        toastNotification={toastNotification}
        setToastNotification={setToastNotification}
        elementType={"Icon"}
        bgColor={"bg-white"}
      />
    </div>
  );
};

export default Sidebar;
