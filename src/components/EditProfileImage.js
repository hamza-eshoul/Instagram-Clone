import React, { useEffect, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { MoonLoader } from "react-spinners";
import { useAuthContext } from "../hooks/useAuthContext";
import { AiOutlinePlus } from "react-icons/ai";
import { auth, storage } from "../firebase/config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useFirestore } from "../hooks/useFirestore";
import { updateProfile } from "firebase/auth";

const EditProfileImage = ({ setEditProfileImage }) => {
  const [previewSource, setPreviewSource] = useState("");
  const [isImageUploading, setImageUploading] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const { updateDocument } = useFirestore("profiles");
  const { user, dispatch } = useAuthContext();

  useEffect(() => {
    if (user.photoURL) {
      setPreviewSource(user.photoURL);
    }
  }, [user]);

  //   image
  const inputRef = useRef(null);

  const handleImageChange = (e) => {
    e.preventDefault();
    const image = e.target.files[0];
    setProfileImage(image);
    previewImage(image);
  };

  const previewImage = (image) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const uploadImage = async (img) => {
    if (!img) {
      setImageUploading(true);
      await updateProfile(auth.currentUser, {
        photoURL: "",
      });

      const updatedUser = { ...user, photoURL: null };
      dispatch({ type: "AUTH_IS_READY", payload: updatedUser });
      updateDocument(user.displayName, { profileImgUrl: null });
      setImageUploading(null);
      setEditProfileImage(null);
      return;
    }

    // upload image to firebase storage
    setImageUploading(true);
    const uploadPath = `/profiles/${user.displayName}/${img.name}`;
    const imgRef = ref(storage, uploadPath);
    await uploadBytesResumable(imgRef, profileImage);

    const imgUrl = await getDownloadURL(imgRef);

    // update user photoURL
    await updateProfile(auth.currentUser, {
      photoURL: imgUrl,
    });

    // update user state

    const updatedUser = { ...user, photoURL: imgUrl };
    dispatch({ type: "AUTH_IS_READY", payload: updatedUser });

    // update image url in db
    updateDocument(user.displayName, { profileImgUrl: imgUrl });

    setImageUploading(null);
    setEditProfileImage(null);
  };

  return (
    <section className="absolute top-1/2 left-1/2 z-20 flex  w-[350px] -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-lg  bg-white p-4 shadow-lg sm:w-[300px] md:w-[500px]">
      {/* Header */}
      <header className="flex items-center justify-center border-b-[1px] border-zinc-200 pb-3">
        <span className="mx-auto text-2xl font-semibold">
          {" "}
          Edit Profile Image{" "}
        </span>
        <div
          className=" flex cursor-pointer items-center justify-center p-2"
          onClick={() => {
            setEditProfileImage(null);
          }}
        >
          <RxCross1 className="text-xl text-zinc-600 " />
        </div>
      </header>

      {/* Picture Section */}

      {previewSource ? (
        <div className="relative flex h-[300px] w-full items-center justify-center rounded border-[1px] border-dotted border-zinc-300 bg-zinc-100/10 p-4">
          <img
            src={previewSource}
            alt="Profile Preview"
            className="object-fit h-[250px] w-[250px] rounded-full"
          />
          <div
            className="absolute top-2 right-2 flex cursor-pointer items-center justify-center rounded-full bg-zinc-100 p-2 hover:bg-zinc-200"
            onClick={() => setPreviewSource("")}
          >
            <RxCross1 className="text-xl text-zinc-600 " />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center rounded border-[1px] border-dotted border-zinc-300 bg-zinc-100/10 py-3">
          No image added
        </div>
      )}

      {/* Footer */}
      <footer className="flex justify-between">
        {/* Upload Image*/}
        <input
          type="file"
          name="myImage"
          accept="image/*"
          onChange={(e) => {
            handleImageChange(e);
          }}
          ref={inputRef}
          className="hidden"
        />
        <button
          className="flex items-center gap-2 rounded border-[1px] bg-white px-4 py-2 font-semibold text-[#101828]"
          onClick={() => {
            inputRef.current.click();
          }}
        >
          <AiOutlinePlus className="text-primaryOrange" />

          <span> Upload Image </span>
        </button>

        <button
          className="flex items-center justify-center rounded bg-lightBlue px-4 py-2 font-semibold text-white"
          onClick={() => {
            uploadImage(profileImage);
          }}
        >
          {isImageUploading ? (
            <MoonLoader
              color={"white"}
              loading={isImageUploading}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            "Save Changes"
          )}
        </button>
      </footer>
    </section>
  );
};

export default EditProfileImage;
