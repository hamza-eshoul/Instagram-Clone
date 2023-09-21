import React, { useRef, useState } from "react";
import Reels from "./Reels";
import Suggestion from "./Suggestions";
import InstCard from "./InstCard";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { db, storage } from "../../Firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { RingLoader } from "react-spinners";
import ReactPlayer from "react-player";

const MainHome = ({
  isDarkModeActive,
  setActiveProfile,
  userInfo,
  isAddingPost,
  setIsAddingPost,
  isReelVideoActive,
  setIsReelVideoActive,
}) => {
  const closeAddPost = () => {
    setIsAddingPost(false);
    setUploadImg(null);
    setProgress(null);
    setLoading(false);
    setIsAddingPost(false);
  };

  const inputRef = useRef(null);

  const [uploadedPost, setUploadedPost] = useState(null);
  const [uploadedPostCaption, setUploadedPostCaption] = useState("");

  const [uploadImg, setUploadImg] = useState(null);
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadPostImg = (img) => {
    if (!img) return;
    const storageRef = ref(
      storage,
      `/profiles/${userInfo.displayName}/${uploadImg.name}`
    );
    const uploadTask = uploadBytesResumable(storageRef, img);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
        setLoading(true);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => addPostDb(url));
      }
    );
  };

  const addPostDb = async (imgUrl) => {
    const colRef = collection(
      db,
      "profiles",
      `${userInfo.displayName}`,
      "profilePosts"
    );

    await addDoc(colRef, {
      isPostLiked: false,
      nbrComments: 0,
      postCaption: uploadedPostCaption,
      postLikes: 0,
      postTime: "24h",
      postImgUrl: imgUrl,
    });

    setUploadedPost({
      postImgUrl: imgUrl,
    });

    // Reset post
    setUploadImg(null);
    setProgress(null);
    setLoading(false);
    setIsAddingPost(false);
    setUploadedPostCaption(" ");
  };

  return (
    <div
      className={`ml-[243px] flex grow justify-center gap-8 bg-[#FAFAFA] dark:bg-hardDark`}
    >
      {/* Reel Video */}
      {isReelVideoActive ? (
        <div className="absolute top-[100px] left-[600px] z-40 bg-white">
          <RxCross2
            className={`${
              isReelVideoActive ? "absolute" : "hidden"
            } top-[-40px] right-[-80px] cursor-pointer text-3xl text-white`}
            onClick={() => {
              setIsReelVideoActive(false);
            }}
          />
          <ReactPlayer
            url={"https://www.youtube.com/shorts/dFg8Nu2X5Mo"}
            playing={true}
            muted={true}
            loop={true}
            controls={false}
            height={500}
          />
        </div>
      ) : (
        ""
      )}
      {/* Overlay */}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 z-10 ${
          isAddingPost || isReelVideoActive ? "" : "hidden"
        } bg-black/70`}
      ></div>{" "}
      {/* Exit Post */}
      <RxCross2
        className={`${isAddingPost ? "absolute" : "hidden"}
         top-4 right-4 z-10 cursor-pointer text-2xl text-white`}
        onClick={closeAddPost}
      />
      {/* Add Post */}
      <div
        className={`${
          isAddingPost ? "absolute" : "hidden"
        } top-24 left-[500px] z-10 flex h-[832px] w-[789px] flex-col rounded-xl bg-white  `}
      >
        <h1 className="flex h-11 w-full items-center justify-center border-b-[1px] border-instGrayish font-semibold">
          {" "}
          Create a new post
        </h1>

        {/* Create Post Interface & Img */}

        {/* Create Post Interface */}

        <div
          className={`${
            uploadImg === null ? "flex" : "hidden"
          } h-[calc(100%-44px)] flex-col items-center justify-center gap-6`}
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <svg
              aria-label="Icon to represent media such as images or videos"
              class="x1lliihq x1n2onr6"
              color="rgb(0, 0, 0)"
              fill="rgb(0, 0, 0)"
              height="77"
              role="img"
              viewBox="0 0 97.6 77.3"
              width="96"
            >
              <title>Icon to represent media such as images or videos</title>
              <path
                d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
                fill="currentColor"
              ></path>
              <path
                d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
                fill="currentColor"
              ></path>
              <path
                d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
                fill="currentColor"
              ></path>
            </svg>{" "}
            <h2 className="text-xl"> Drag photos here </h2>
          </div>
          <input
            type="file"
            name="myImage"
            accept="image/*"
            onChange={(event) => {
              setUploadImg(event.target.files[0]);
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

        {/* Img */}

        <div
          className={`${
            uploadImg === null ? "hidden" : "flex"
          } h-[calc(100%-44px)] w-full flex-col items-center gap-5`}
        >
          <img
            src={`${uploadImg === null ? "" : URL.createObjectURL(uploadImg)}`}
            className="h-[80%] w-full object-cover"
          />
          <textarea
            placeholder="Write a caption..."
            className="h-14 w-1/2 resize-none border-[1px] p-1 outline-none"
            value={uploadedPostCaption}
            onChange={(e) => setUploadedPostCaption(e.target.value)}
          />{" "}
          <div className="flex items-center justify-center ">
            <button
              className={`${
                progress === null ? "" : "hidden"
              } w-[100px] rounded-lg bg-lightBlue px-4 py-[7px] text-lg font-semibold text-white hover:bg-darkBlue`}
              onClick={() => {
                uploadPostImg(uploadImg);
              }}
            >
              {" "}
              Share{" "}
            </button>
            <RingLoader
              color={"blue"}
              loading={loading}
              size={40}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </div>
      </div>
      {/* Reels and Cards Section */}
      <section className="flex flex-col gap-4">
        {" "}
        {/* Reels */}
        <div className="mt-4 flex h-[119px] w-[470px] items-center gap-2 rounded-xl border-[1px] border-instGrayish bg-white py-4 px-4 dark:border-[#363636] dark:bg-hardDark">
          <Reels
            reelIcon={
              "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2FHomeImg%2Finstagram-reel.png?alt=media&token=155e9ba3-8ad4-401e-ab14-e9b29e0055cc"
            }
            setIsReelVideoActive={setIsReelVideoActive}
          />
        </div>
        {/* Cards */}
        <div className="mb-10 flex flex-col gap-3">
          {uploadedPost === null ? (
            ""
          ) : (
            <InstCard
              cardProfileImg={userInfo.photoURL}
              cardProfileName={userInfo.displayName}
              cardProfileNickname={userInfo.displayName}
              showVerify={"hidden"}
              cardImg={uploadedPost.postImgUrl}
              likeNbr={"0"}
              isDarkModeActive={isDarkModeActive}
              setActiveProfile={setActiveProfile}
            />
          )}

          <InstCard
            cardProfileImg={
              "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2Fhamzaskyn%2Fcamus.jpg?alt=media&token=338e9109-228b-424e-a8ca-1affd22053c5"
            }
            cardProfileName={"hamzaskyn"}
            cardProfileNickname={"hamzaskyn"}
            showVerify={"hidden"}
            cardImg={
              "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2Fhamzaskyn%2FuseEffectExample.png?alt=media&token=d36ea123-bdab-4eb1-b34f-0342d12ab553"
            }
            likeNbr={"107"}
            isDarkModeActive={isDarkModeActive}
            setActiveProfile={setActiveProfile}
            comment1Name={"Aiden Wright"}
            comment1Content={"Great Post"}
            comment2Name={"Cecil Morales"}
            comment2Content={"Keep up the good work"}
          />
          <InstCard
            cardProfileImg={
              "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2Fozark.jpg?alt=media&token=2bbef0c8-f820-4a9f-959e-237b0be75ecc"
            }
            cardProfileName={"ozark"}
            cardProfileNickname={"ozark"}
            showVerify={"show"}
            cardImg={
              "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2FozarkPost.jpg?alt=media&token=909f2e09-08e7-402f-8cb5-d293a7246a8f"
            }
            likeNbr={"56"}
            isDarkModeActive={isDarkModeActive}
            setActiveProfile={setActiveProfile}
            comment1Name={"Ernesto Campos"}
            comment1Content={"It look like she got shot in this picture"}
            comment2Name={"Jeton Deschampss"}
            comment2Content={"please! dont stop this series."}
          />
          <InstCard
            cardProfileImg={
              "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2Fhamzaskyn%2Fcamus.jpg?alt=media&token=338e9109-228b-424e-a8ca-1affd22053c5"
            }
            cardProfileName={"hamzaskyn"}
            cardProfileNickname={"hamzaskyn"}
            showVerify={"hidden"}
            cardImg={
              "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2Fhamzaskyn%2FJS-ES6.jpg?alt=media&token=b5a234e8-078d-481b-82f2-9b11e569a5a1"
            }
            likeNbr={"255"}
            isDarkModeActive={isDarkModeActive}
            setActiveProfile={setActiveProfile}
            comment1Name={"Sofia Bennett"}
            comment1Content={"Arrow Functions make writing code much cleaner"}
            comment2Name={"cristiano"}
            comment2Content={"I use these features on a daily basis ! ."}
          />
          <InstCard
            cardProfileImg={
              "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2Felonmusk.jpg?alt=media&token=8759d492-888e-4f2e-8097-9f9c15021521"
            }
            cardProfileName={"elonmusk"}
            cardProfileNickname={"elonmusk"}
            showVerify={"show"}
            cardImg={
              "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2Felonpost.jpg?alt=media&token=b17d4a76-83d8-49f2-a3d7-a7180e226a3a"
            }
            likeNbr={"23"}
            isDarkModeActive={isDarkModeActive}
            setActiveProfile={setActiveProfile}
            comment1Name={"Ryan Young"}
            comment1Content={"Now, that Elon Musk took over."}
            comment2Name={"Oya Avan"}
            comment2Content={"The burn must have felt real 🤣🤣🤣🤣🤣."}
          />
          <InstCard
            cardProfileImg={
              "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2Fcristiano.jpg?alt=media&token=10c2540b-b6bb-4ef1-9ba3-9e563f949d26"
            }
            cardProfileName={"cristiano"}
            cardProfileNickname={"cristiano"}
            showVerify={"show"}
            cardImg={
              "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2FronaldoPost.jpg?alt=media&token=2928cb29-9bc5-4ed7-8f01-c2eb5003a64a"
            }
            likeNbr={"8"}
            isDarkModeActive={isDarkModeActive}
            setActiveProfile={setActiveProfile}
            comment1Name={"Priyanka Fernandes"}
            comment1Content={"My king my goat is cr7❤️🙌👏👑"}
            comment2Name={"Signe Thomsen"}
            comment2Content={"let`s Go Cristiano SIUUUUUUUUUUU"}
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
                src={userInfo.photoURL}
                className="h-full w-full cursor-pointer rounded-full border-[1px] border-black/30"
              />
            </div>
            <div className="flex flex-col text-[14px]">
              <Link
                to="/profile"
                onClick={() => setActiveProfile(userInfo.displayName)}
              >
                {" "}
                <p className="font-bold dark:text-white">
                  {" "}
                  {userInfo.displayName}{" "}
                </p>
              </Link>
              <p className="text-[#8E8E8E]"> {userInfo.displayName} </p>
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
              Suggested for you
            </p>
          </div>
          <p className="cursor-pointer text-[12px] font-bold text-[#262626] hover:text-black/50 dark:text-white">
            {" "}
            See All
          </p>
        </div>
        <div className="mb-3.5 flex flex-col gap-3">
          <Suggestion
            suggestionName={"cristiano"}
            suggestionImg={
              "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2Fcristiano.jpg?alt=media&token=10c2540b-b6bb-4ef1-9ba3-9e563f949d26"
            }
            setActiveProfile={setActiveProfile}
          />
          <Suggestion
            suggestionName={"elonmusk"}
            suggestionImg={
              "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2Felonmusk.jpg?alt=media&token=8759d492-888e-4f2e-8097-9f9c15021521"
            }
            setActiveProfile={setActiveProfile}
          />
          <Suggestion
            suggestionName={"ozark"}
            suggestionImg={
              "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2Fozark.jpg?alt=media&token=2bbef0c8-f820-4a9f-959e-237b0be75ecc"
            }
            setActiveProfile={setActiveProfile}
          />
          <Suggestion
            suggestionName={"traversymedia"}
            suggestionImg={
              "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2Ftraversymedia.jpg?alt=media&token=62c24e11-22b3-4606-b323-f43050a29e22"
            }
            setActiveProfile={setActiveProfile}
          />
          <Suggestion
            suggestionName={"theodinproject"}
            suggestionImg={
              "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2Ftheodinproject.jpg?alt=media&token=54cae2b0-0757-45e4-850f-7146fa5926a9"
            }
            setActiveProfile={setActiveProfile}
          />
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 opacity-50 dark:opacity-100">
          <a
            href="https://about.instagram.com/"
            target="_blank"
            className="cursor-pointer text-[12px] text-[#8E8E8E] hover:underline "
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

        {/* Copyright */}
        <div className="text-[12px] text-[#8E8E8E] opacity-50 dark:opacity-100">
          © 2023 INSTAGRAM FROM META
        </div>
      </section>
    </div>
  );
};

export default MainHome;
