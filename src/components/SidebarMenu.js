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

const SidebarMenu = ({ isDarkMode, setIsDarkMode }) => {
  const [isMoreMenuActive, setIsMoreMenuActive] = useState(false);
  const { logout } = useLogout();

  return (
    <div className="relative hidden md:block">
      {/* Hamburger Menu Displayed */}

      {isMoreMenuActive && (
        <div className="absolute bottom-20 translate-y-5 flex-col gap-3 dark:text-red-500">
          <div className="z-3 w-[245px] rounded-lg bg-white drop-shadow-lg dark:bg-lightDark">
            <div className="flex cursor-pointer justify-between border-b-[1px] border-instGrayish border-opacity-50 px-4 py-2.5 active:opacity-50 dark:text-white">
              <p> Settings</p>
              <SettingsSvg />
            </div>
            <div className="flex cursor-pointer justify-between border-b-[1px] border-instGrayish border-opacity-50 px-4 py-2.5 active:opacity-50 dark:text-white">
              <p> Your Activity</p>
              <ActivitySvg />
            </div>{" "}
            <div className="flex cursor-pointer justify-between border-b-[1px] border-instGrayish border-opacity-50 px-4 py-2.5 active:opacity-50 dark:text-white">
              <p> Saved</p>
              <SaveSvg />
            </div>{" "}
            <div
              className="flex cursor-pointer justify-between border-b-[1px] border-instGrayish border-opacity-50 px-4 py-2.5 active:opacity-50 dark:text-white"
              onClick={() => {
                setIsDarkMode(!isDarkMode);
              }}
            >
              <p> Switch appearance</p>
              <DarkModeSvg />
            </div>{" "}
            <div className="flex cursor-pointer justify-between border-b-[1px] border-instGrayish border-opacity-50 px-4 py-2.5 active:opacity-50 dark:text-white">
              <p> Report a problem </p>
              <ProblemSvg />
            </div>
          </div>

          <div className="z-3 w-[245px] rounded-lg bg-white drop-shadow-lg dark:bg-lightDark">
            <p className="flex cursor-pointer justify-between border-b-[1px] border-instGrayish border-opacity-50 px-4 py-2.5 active:opacity-50 dark:text-white">
              {" "}
              Switch accounts
            </p>

            <p
              className="flex cursor-pointer justify-between border-b-[1px] border-instGrayish border-opacity-50 px-4 py-2.5 active:opacity-50 dark:text-white"
              onClick={logout}
            >
              {" "}
              Log out
            </p>
          </div>
        </div>
      )}

      {/* Hamburger Menu */}
      <div
        className="flex cursor-pointer items-center gap-3 p-3 hover:rounded-2xl hover:bg-[#FAFAFA] dark:hover:bg-[#121212]"
        onClick={() => {
          setIsMoreMenuActive(!isMoreMenuActive);
        }}
      >
        <AiOutlineMenu className="text-2xl" />
        <p className={`${isMoreMenuActive ? "font-bold" : ""} hidden lg:block`}>
          {" "}
          More{" "}
        </p>
      </div>
    </div>
  );
};

export default SidebarMenu;
