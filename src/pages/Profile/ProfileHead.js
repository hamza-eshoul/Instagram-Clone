// images
import defaultProfile from "../../assets/images/defaultProfile.png";

// icons
import { BsThreeDots } from "react-icons/bs";

const ProfileHead = ({ profile, postsLength }) => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 xsm:flex-row sm:gap-20">
      {/* Profile Img */}
      <div className="h-24 w-24 sm:h-36 sm:w-36">
        <img
          src={profile.profileImgUrl ? profile.profileImgUrl : defaultProfile}
          className="h-full w-full rounded-full object-contain"
        />
      </div>

      {/* Profile Info */}
      <div className="flex flex-col gap-6">
        <div className="gap:0 flex items-center sm:gap-2">
          <p className="text-lg sm:text-xl "> {profile.profileName} </p>

          <button className="mx-4  rounded-lg bg-lightBlue px-5 py-[7px] text-sm font-semibold text-white hover:bg-darkBlue">
            {" "}
            Follow{" "}
          </button>
          <BsThreeDots className="cardItemsHover text-2xl " />
        </div>

        <div className="flex gap-4 sm:gap-10">
          <p>
            {" "}
            <span className="font-semibold">{postsLength}</span>{" "}
            {postsLength > 1 ? "posts" : "post"}
          </p>
          <p>
            {" "}
            <span className="font-semibold">{profile.nbrFollowers}</span>{" "}
            followers{" "}
          </p>
          <p>
            {" "}
            <span className="font-semibold">{profile.nbrFollowing}</span>{" "}
            following{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHead;
