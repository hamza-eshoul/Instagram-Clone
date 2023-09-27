import { useState, useRef } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

// firebase
import { storage } from "../firebase/config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

// icons
import { RxCross2 } from "react-icons/rx";

// svg
import { ReactComponent as PhotoSvg } from "../assets/svg/Photo.svg";

// components
import Loading from "./Loading";
import Overlay from "./Overlay";
import { useFirestore } from "../hooks/useFirestore";

const CreatePost = ({ setIsAddPost }) => {
  const [postCaption, setPostCaption] = useState("");
  const [postImage, setPostImage] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const inputRef = useRef(null);
  const { user } = useAuthContext();
  const { addDocument } = useFirestore("profiles_posts");

  const uploadPostImage = async (postImage) => {
    setIsPending(true);
    const uploadPath = `/profiles/${user.displayName}/${postImage.name}`;
    const imgRef = ref(storage, uploadPath);
    await uploadBytesResumable(imgRef, postImage);

    const imgUrl = await getDownloadURL(imgRef);

    // add document to db
    addDocument({
      postAuthor: user.displayName,
      postAuthorImg: user.photoURL,
      postImgUrl: imgUrl,
      postLikes: 0,
      postCaption,
      postComments: [],
      postTime: "24h",
    });

    resetAddPost();
  };

  const resetAddPost = () => {
    setIsPending(false);
    setPostImage(null);
    setIsAddPost(false);
    setPostCaption("");
  };

  return (
    <>
      <Overlay />
      {/* Exit Post */}
      <RxCross2
        className="fixed top-4 right-4 z-10 cursor-pointer text-2xl text-white"
        onClick={resetAddPost}
      />
      {/* Add Post */}
      <div className="fixed top-[50%] left-[50%] z-10  mx-auto flex w-[80%] -translate-x-1/2 -translate-y-1/2 flex-col rounded-xl bg-white md:w-1/2">
        <h1 className="flex h-11 w-full items-center justify-center border-b-[1px] border-instGrayish font-semibold">
          {" "}
          Create a new post
        </h1>

        {/* Create Post Interface */}
        <div
          className={`${
            postImage === null ? "flex" : "hidden"
          } flex-col items-center justify-center gap-6 p-12 md:py-[20%] lg:py-[30%]`}
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="text-xl"> Drag photos here </h2>
            <PhotoSvg />
          </div>

          <input
            type="file"
            name="myImage"
            accept="image/*"
            onChange={(event) => {
              setPostImage(event.target.files[0]);
            }}
            className="hidden"
            ref={inputRef}
          />

          <button
            className="rounded-lg bg-lightBlue px-4 py-[7px] text-sm font-semibold text-white hover:bg-darkBlue"
            onClick={() => {
              inputRef.current.click();
            }}
          >
            {" "}
            Select from computer
          </button>
        </div>

        {/* Image Upload */}

        <div
          className={`${
            postImage === null ? "hidden" : "flex"
          } mb-4  w-full flex-col items-center gap-5`}
        >
          <div className="h-[300px] w-full lg:h-[500px]">
            <img
              src={postImage && URL.createObjectURL(postImage)}
              className="h-full w-full object-fill"
            />
          </div>
          <textarea
            placeholder="Write a caption..."
            className="h-14 w-1/2 resize-none border-[1px] p-1 outline-none"
            value={postCaption}
            onChange={(e) => setPostCaption(e.target.value)}
          />{" "}
          <button
            className="rounded-lg bg-lightBlue px-8 py-2 text-lg font-semibold text-white hover:bg-darkBlue"
            onClick={() => {
              uploadPostImage(postImage);
            }}
          >
            {isPending ? (
              <Loading loadingColor={"white"} loadingSize={30} />
            ) : (
              "Share"
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
