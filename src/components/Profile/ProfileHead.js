import React from "react";
import { BsThreeDots } from "react-icons/bs";

const ProfileHead = ({
  profileName,
  profileImg,
  profileFollowersNbr,
  profileFollowingNbr,
  posts,
}) => {
  return (
    <div className="mt-8 flex -translate-x-28 gap-28">
      {/* Profile Img */}
      <div className="h-[150px] w-[150px]">
        <img
          src={profileImg}
          className="h-full w-full rounded-full object-contain"
        />
      </div>

      {/* Profile Info */}
      <div className="mt-1 flex flex-col gap-4">
        <div className="flex h-11 items-center">
          <p className="w-[180px] text-xl "> {profileName} </p>

          <button className="mx-4 w-[80px] rounded-lg bg-lightBlue px-5 py-[7px] text-sm font-semibold text-white hover:bg-darkBlue">
            {" "}
            Follow{" "}
          </button>
          <BsThreeDots className="cardItemsHover text-2xl " />
        </div>

        <div className="flex gap-8">
          <p>
            {" "}
            <span className="font-semibold">{posts.length}</span> posts{" "}
          </p>
          <p>
            {" "}
            <span className="font-semibold">{profileFollowersNbr}</span>{" "}
            followers{" "}
          </p>
          <p>
            {" "}
            <span className="font-semibold">{profileFollowingNbr}</span>{" "}
            following{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHead;
