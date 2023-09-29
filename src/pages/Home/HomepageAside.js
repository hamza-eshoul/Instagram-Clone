import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

// images
import defaultProfile from "../../assets/images/defaultProfile.png";
import SuggestionsList from "./SuggestionsList";
import AsideFooter from "../../components/AsideFooter";

const HomepageAside = () => {
  const { user } = useAuthContext();

  return (
    <aside className="hidden w-[319px] flex-col gap-4 xl:flex">
      <header className="flex items-center justify-between">
        <div className="h-[56px] w-[56px]">
          <img
            src={user.photoURL ? user.photoURL : defaultProfile}
            alt="user"
            className="h-full w-full cursor-pointer rounded-full border-[1px] border-black/30"
          />
        </div>
        <div className="flex flex-col pr-12 text-[14px]">
          <Link to={`/profile/${user.displayName}`}>
            {" "}
            <p className="font-bold "> {user.displayName}</p>
          </Link>
          <p className="text-[#8E8E8E]"> {user.displayName}</p>
        </div>

        <span className="text-[12px] font-semibold text-[#0095F6]">
          {" "}
          Switch{" "}
        </span>
      </header>

      <div className="flex justify-between">
        <p
          className="text-[14px] font-semibold text-[#8E8E8E]
            "
        >
          Suggested for you
        </p>

        <span className="cursor-pointer text-[12px] font-bold text-[#262626] hover:text-black/50 ">
          {" "}
          See All
        </span>
      </div>
      <SuggestionsList />

      <AsideFooter />
    </aside>
  );
};

export default HomepageAside;
