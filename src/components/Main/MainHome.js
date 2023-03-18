import React from "react";
import Reels from "./Reels";
import instagramReel from "../../img/instagram-reel.png";
import profileImg from "../../img/profileImg.jpg";
import Suggestion from "./Suggestions";
import cristiano from "../../img/cristiano.jpg";
import elonmusk from "../../img/elonmusk.jpg";
import humansofny from "../../img/humansofny.jpg";
import dougthepug from "../../img/dougthepug.jpg";
import natgeo from "../../img/natgeo.jpg";
import ronaldoPost from "../../img/ronaldoPost.jpg";
import InstCard from "./InstCard";

const MainHome = () => {
  return (
    <div className="flex grow justify-center gap-8 bg-[#FAFAFA]">
      {/* Reels and Cards Section */}
      <section className="flex flex-col gap-4">
        {/* Reels */}
        <div className="mt-4 flex h-[119px] w-[470px] items-center gap-2 rounded-xl border-[1px] border-instGrayish bg-white py-4 px-4">
          <Reels reelIcon={instagramReel} />
        </div>
        {/* Cards */}
        <div>
          <InstCard
            cardProfileImg={cristiano}
            cardProfileName={"cristiano ronaldo"}
            cardProfileNickname={"cristiano"}
            showVerify={"block"}
            cardImg={ronaldoPost}
            likeNbr={"1,041,113"}
          />
        </div>
      </section>

      {/* Profile and Suggestions Section */}
      <section className="mt-4 flex w-[319px] flex-col gap-4">
        {/* Profile */}
        <div className="mt-4 flex h-[66px] items-center justify-between">
          <div className="flex cursor-pointer items-center justify-center gap-4">
            <div className="h-[56px] w-[56px]">
              <img
                src={profileImg}
                className="h-full w-full cursor-pointer rounded-full border-[1px] border-black/30"
              />
            </div>
            <div className="flex flex-col text-[14px]">
              <p className="font-bold"> hamzaskyn </p>
              <p className="text-[#8E8E8E]"> hamzaskyn </p>
            </div>
          </div>
          <p className="text-[12px] font-semibold text-[#0095F6]"> Switch </p>
        </div>

        {/* Suggestions */}
        <div className="flex w-[319px] justify-between">
          <div>
            <p
              className="text-[14px] font-semibold text-[#8E8E8E]
            "
            >
              Suggestions for you
            </p>
          </div>
          <p className="cursor-pointer text-[12px] font-bold text-[#262626] hover:text-black/50">
            {" "}
            See All
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Suggestion
            suggestionName={"cristiano"}
            suggestionImg={cristiano}
            suggestionUrl="https://www.instagram.com/cristiano/"
          />
          <Suggestion
            suggestionName={"elon musk"}
            suggestionImg={elonmusk}
            suggestionUrl="https://www.instagram.com/elonrmuskk/?hl=en"
          />
          <Suggestion
            suggestionName={"humansofny"}
            suggestionImg={humansofny}
            suggestionUrl="https://www.instagram.com/humansofny/?hl=en"
          />
          <Suggestion
            suggestionName={"doug the pug"}
            suggestionImg={dougthepug}
            suggestionUrl="https://www.instagram.com/itsdougthepug/?hl=en"
          />
          <Suggestion
            suggestionName={"natgeo"}
            suggestionImg={natgeo}
            suggestionUrl="https://www.instagram.com/natgeo/"
          />
        </div>

        {/* Links */}
        <div className="flex w-[319px] gap-4">
          <a
            href="https://about.instagram.com/"
            target="_blank"
            className="cursor-pointer text-[12px] text-[#8E8E8E] opacity-50 hover:underline "
          >
            About
          </a>{" "}
          <a
            href="https://help.instagram.com/"
            target="_blank"
            className="cursor-pointer text-[12px] text-[#8E8E8E] "
          >
            Help
          </a>
          <a
            href="https://about.instagram.com/blog/"
            target="_blank"
            className="cursor-pointer text-[12px] text-[#8E8E8E] "
          >
            Press
          </a>
          <a
            href="https://developers.facebook.com/docs/instagram"
            target="_blank"
            className="cursor-pointer text-[12px] text-[#8E8E8E] "
          >
            API
          </a>{" "}
          <a
            href="https://about.instagram.com/about-us/careers"
            target="_blank"
            className="cursor-pointer text-[12px] text-[#8E8E8E] "
          >
            Jobs
          </a>{" "}
          <a
            href="https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect"
            target="_blank"
            className="cursor-pointer text-[12px] text-[#8E8E8E] "
          >
            Privacy
          </a>{" "}
          <a
            href="https://help.instagram.com/581066165581870/"
            target="_blank"
            className="cursor-pointer text-[12px] text-[#8E8E8E] "
          >
            Terms
          </a>{" "}
          <a
            href="https://www.instagram.com/explore/locations/"
            target="_blank"
            className="cursor-pointer text-[12px] text-[#8E8E8E] "
          >
            Locations
          </a>
          <a
            href="#"
            target="_blank"
            className="cursor-pointer text-[12px] text-[#8E8E8E] "
          >
            Language
          </a>
          <a
            href="https://about.meta.com/technologies/meta-verified/"
            target="_blank"
            className="cursor-pointer text-[12px] text-[#8E8E8E] "
          >
            Meta Verified
          </a>
        </div>
      </section>
    </div>
  );
};

export default MainHome;
