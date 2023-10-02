import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

// images
import defaultProfile from "../assets/images/defaultProfile.png";

// icons
import Icon from "./Icons";
import { RiLogoutCircleRLine } from "react-icons/ri";

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
import SidebarMenu from "./SidebarMenu";
import Toast from "./Toast";

const Sidebar = ({ setIsReel, setIsAddPost }) => {
  const [toastNotification, setToastNotification] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const { user } = useAuthContext();
  const { logout } = useLogout();

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
    <aside className="fixed bottom-0 z-10 flex w-full flex-col justify-between border-t-[1px] border-instGrayish bg-white md:min-h-screen md:w-auto md:border-r-[1px] md:p-4 ">
      {/* Instagram Img & Sidebar Icons */}
      <nav className="flex items-center  px-0 md:flex-col md:gap-9 md:px-0 lg:items-start">
        {/* Instagram Img */}
        <Link to="/homepage">
          {/* Insta Svg */}
          <div
            className={`${
              isSearchActive ? "block" : "lg:hidden"
            } hidden pt-1 md:block lg:pl-3`}
          >
            <InstaLogoSvg />
          </div>
          {/* Insta Img */}

          <div
            className={`${
              isSearchActive ? "hidden" : "lg:block"
            } hidden pt-6 pl-3`}
          >
            <InstaImgSvg />
          </div>
        </Link>

        {/* Sidebar Icons */}

        <ul className="flex grow justify-around gap-2 md:flex-col">
          <li>
            <Link to="/homepage">
              <Icon icon={<HomeSvg />} iconText={"Home"} />
            </Link>
          </li>

          {/* Search Functionality */}
          <li
            className="hidden md:block"
            onClick={() => {
              setIsSearchActive(!isSearchActive);
            }}
          >
            <Icon icon={<SearchSvg />} iconText={"Search"} />
          </li>

          <li>
            <Link to="/explore">
              <Icon icon={<ExploreSvg />} iconText={"Explore"} />
            </Link>
          </li>

          <li onClick={() => setIsReel(true)}>
            <Icon icon={<ReelSvg />} iconText={"Reels"} />
          </li>

          <li
            className="hidden md:block"
            onClick={() => toggleToastNotification()}
          >
            <Icon icon={<MessagesSvg />} iconText={"Messages"} />{" "}
          </li>

          <li
            className="hidden md:block"
            onClick={() => toggleToastNotification()}
          >
            <Icon icon={<NotificationsSvg />} iconText={"Notifications"} />
          </li>

          <li onClick={() => setIsAddPost(true)}>
            <Icon icon={<CreateSvg />} iconText={"Create"} />
          </li>

          <li className="md:hidden" onClick={() => logout()}>
            <Icon icon={<RiLogoutCircleRLine className="text-2xl" />} />
          </li>

          <li>
            <Link to={`/profile/${user.displayName}`}>
              <Icon
                icon={
                  <div className="h-7 w-7">
                    <img
                      src={user.photoURL ? user.photoURL : defaultProfile}
                      className="h-full w-full rounded-full"
                      alt="current user"
                    />
                  </div>
                }
                iconText={user.displayName}
              />
            </Link>
          </li>
        </ul>
      </nav>

      <SidebarMenu toggleToastNotification={toggleToastNotification} />
      {isSearchActive && <Search setIsSearchActive={setIsSearchActive} />}

      <Toast
        toastNotification={toastNotification}
        setToastNotification={setToastNotification}
        elementType={"Icon"}
        bgColor={"bg-white"}
      />
    </aside>
  );
};

export default Sidebar;
