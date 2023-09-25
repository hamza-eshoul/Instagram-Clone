import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

// images
import defaultProfile from "../../assets/images/defaultProfile.png";
import SuggestionsList from "../../components/SuggestionsList";
import AsideLinks from "../../components/AsideLinks";

const HomepageAside = () => {
  const { user } = useAuthContext();

  return (
    <section className="mt-4 flex w-[319px] flex-col gap-4">
      <div className="mt-4 flex h-[66px] items-center justify-between">
        <div className="flex cursor-pointer items-center justify-center gap-4">
          <div className="h-[56px] w-[56px]">
            <img
              src={user.photoURL ? user.photoURL : defaultProfile}
              alt="User photo url"
              className="h-full w-full cursor-pointer rounded-full border-[1px] border-black/30"
            />
          </div>
          <div className="flex flex-col text-[14px]">
            <Link to="/profile">
              {" "}
              <p className="font-bold dark:text-white"> {user.displayName}</p>
            </Link>
            <p className="text-[#8E8E8E]"> {user.displayName}</p>
          </div>
        </div>
        <p className="text-[12px] font-semibold text-[#0095F6]"> Switch </p>
      </div>

      <div className="flex w-[319px] justify-between">
        <div>
          <p
            className="text-[14px] font-semibold text-[#8E8E8E]
            "
          >
            Suggested for you
          </p>
        </div>
        <p className="cursor-pointer text-[12px] font-bold text-[#262626] hover:text-black/50 dark:text-white">
          {" "}
          See All
        </p>
      </div>
      <SuggestionsList />

      <AsideLinks />

      {/* Copyright */}
      <div className="text-[12px] text-[#8E8E8E] opacity-50 dark:opacity-100">
        © 2023 INSTAGRAM FROM META
      </div>
    </section>
  );
};

export default HomepageAside;
