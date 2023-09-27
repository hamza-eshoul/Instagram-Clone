// images
import defaultProfile from "../../assets/images/defaultProfile.png";

// icons
import { BsThreeDots } from "react-icons/bs";

const ProfileHead = ({ profile, postsLength }) => {
  return (
    <div className="mt-8 flex -translate-x-28 gap-28">
      {/* Profile Img */}
      <div className="h-[150px] w-[150px]">
        <img
          src={profile.profileImgUrl ? profile.profileImgUrl : defaultProfile}
          className="h-full w-full rounded-full object-contain"
        />
      </div>

      {/* Profile Info */}
      <div className="mt-1 flex flex-col gap-4">
        <div className="flex h-11 items-center">
          <p className="w-[180px] text-xl "> {profile.profileName} </p>

          <button className="mx-4 w-[80px] rounded-lg bg-lightBlue px-5 py-[7px] text-sm font-semibold text-white hover:bg-darkBlue">
            {" "}
            Follow{" "}
          </button>
          <BsThreeDots className="cardItemsHover text-2xl " />
        </div>

        <div className="flex gap-8">
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
