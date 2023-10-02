import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

// images
import defaultProfile from "../../assets/images/defaultProfile.png";

// icons
import { BsThreeDots } from "react-icons/bs";
import { BsFillCameraFill } from "react-icons/bs";

// components
import EditProfileImage from "../../components/EditProfileImage";
import Overlay from "../../components/Overlay";
import Toast from "../../components/Toast";

const ProfileHead = ({ profile, postsLength }) => {
  const [toastNotification, setToastNotification] = useState(null);
  const [editProfileImage, setEditProfileImage] = useState(null);
  const { user } = useAuthContext();

  const toggleToastNotification = () => {
    setToastNotification(true);

    setTimeout(() => {
      setToastNotification(false);
    }, 5000);
  };

  return (
    <header className="mt-10 flex  w-full flex-col items-center justify-center gap-4 xsm:flex-row sm:gap-20">
      {editProfileImage && (
        <>
          <Overlay />
          <EditProfileImage setEditProfileImage={setEditProfileImage} />
        </>
      )}

      {/* Profile Img */}
      <div className="relative h-24 w-24 sm:h-36 sm:w-36">
        <img
          src={profile.profileImgUrl ? profile.profileImgUrl : defaultProfile}
          className="h-full w-full rounded-full"
          alt="profile"
        />
        {user.displayName === profile.profileName && (
          <div
            className="absolute right-[0.5px] bottom-[0.5px] flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-zinc-100 hover:bg-zinc-200 sm:top-[110px] sm:h-10 sm:w-10"
            onClick={() => {
              setEditProfileImage(!editProfileImage);
            }}
          >
            <BsFillCameraFill className="text-lg sm:text-2xl" />
          </div>
        )}
      </div>

      {/* Profile Info */}
      <div className="flex flex-col gap-6">
        <div className="gap:0 flex items-center justify-between sm:gap-2">
          <span className="text-lg sm:text-xl "> {profile.profileName} </span>

          {user.displayName !== profile.profileName && (
            <button
              className="mx-4  rounded-lg bg-lightBlue px-5 py-[7px] text-sm font-semibold text-white hover:bg-darkBlue"
              onClick={() => toggleToastNotification()}
            >
              {" "}
              Follow{" "}
            </button>
          )}

          <BsThreeDots className="cardItemsHover text-2xl " />
        </div>

        <div className="flex gap-4 sm:gap-10">
          <span>
            {" "}
            <span className="font-semibold">{postsLength}</span>{" "}
            {postsLength > 1 ? "posts" : "post"}
          </span>
          <span>
            {" "}
            <span className="font-semibold">{profile.nbrFollowers}</span>{" "}
            followers{" "}
          </span>
          <span>
            {" "}
            <span className="font-semibold">{profile.nbrFollowing}</span>{" "}
            following{" "}
          </span>
        </div>
      </div>
      <Toast
        toastNotification={toastNotification}
        setToastNotification={setToastNotification}
        elementType={"Button"}
        bgColor={"bg-white"}
      />
    </header>
  );
};

export default ProfileHead;
