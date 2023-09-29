import { useState } from "react";
import { useLogout } from "../hooks/useLogout";

// icons
import { AiOutlineMenu } from "react-icons/ai";

// svg
import { ReactComponent as SettingsSvg } from "../assets/svg/Settings.svg";
import { ReactComponent as ActivitySvg } from "../assets/svg/Activity.svg";
import { ReactComponent as SaveSvg } from "../assets/svg/Save.svg";
import { ReactComponent as DarkModeSvg } from "../assets/svg/DarkMode.svg";
import { ReactComponent as ProblemSvg } from "../assets/svg/Problem.svg";

const SidebarMenu = ({ toggleToastNotification }) => {
  const [isMoreMenuActive, setIsMoreMenuActive] = useState(false);
  const { logout } = useLogout();

  return (
    <div className="relative hidden md:block">
      {/* Hamburger Menu Displayed */}

      {isMoreMenuActive && (
        <div className="-500 absolute bottom-20 flex translate-y-5 flex-col gap-2">
          <ul className="rounded-lg bg-white drop-shadow-lg ">
            <li className="menuBtn" onClick={() => toggleToastNotification()}>
              <span> Settings</span>
              <SettingsSvg />
            </li>
            <li className="menuBtn" onClick={() => toggleToastNotification()}>
              <span> Your Activity</span>
              <ActivitySvg />
            </li>{" "}
            <li className="menuBtn" onClick={() => toggleToastNotification()}>
              <span> Saved</span>
              <SaveSvg />
            </li>{" "}
            <li className="menuBtn" onClick={() => toggleToastNotification()}>
              <span> Switch appearance</span>
              <DarkModeSvg />
            </li>{" "}
            <li className="menuBtn" onClick={() => toggleToastNotification()}>
              <span> Report a problem </span>
              <ProblemSvg />
            </li>
          </ul>

          <ul className="w-[245px] rounded-lg bg-white drop-shadow-lg ">
            <li>
              <button className="menuBtn w-full" onClick={logout}>
                {" "}
                Switch accounts
              </button>
            </li>

            <li>
              <button className="menuBtn" onClick={logout}>
                {" "}
                Log out
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Hamburger Menu */}
      <div
        className="flex cursor-pointer items-center gap-4 p-3 hover:rounded-2xl hover:bg-[#FAFAFA] "
        onClick={() => {
          setIsMoreMenuActive(!isMoreMenuActive);
        }}
      >
        <AiOutlineMenu className="text-2xl" />
        <span
          className={`${isMoreMenuActive ? "font-bold" : ""} hidden lg:block`}
        >
          {" "}
          More{" "}
        </span>
      </div>
    </div>
  );
};

export default SidebarMenu;
