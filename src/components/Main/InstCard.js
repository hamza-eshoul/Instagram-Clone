import React, { useEffect, useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FcLike } from "react-icons/fc";

const InstCard = ({
  cardProfileImg,
  cardProfileName,
  cardProfileNickname,
  isDarkModeActive,
  showVerify,
  cardImg,
  likeNbr,
  comment1Name,
  comment1Content,
  comment2Name,
  comment2Content,
  setActiveProfile,
}) => {
  const ref = useRef(null);

  const [isPostLiked, setIsPostLiked] = useState(false);
  const [likeNbrState, setLikeNbrState] = useState(+likeNbr);

  return (
    <div className="rounded-xl border-[1px] border-instGrayish bg-white dark:border-[#363636] dark:bg-hardDark dark:text-white">
      {/* Card Info */}
      <div className="flex items-center justify-between py-2 px-3">
        {/* Info */}
        <div className="flex items-center justify-center gap-2">
          {/* Profile Img */}
          <div className="h-8 w-8">
            <img
              src={cardProfileImg}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          {/* Name and nickname */}
          <div className="flex flex-col text-[14px]">
            <div className="flex items-center justify-center gap-1">
              <Link
                to="/profile"
                onClick={() => {
                  setActiveProfile(cardProfileName);
                }}
              >
                {" "}
                <p className="cardItemsHover font-bold">
                  {" "}
                  {cardProfileName}{" "}
                </p>{" "}
              </Link>
              <div className="h-4 w-4">
                {" "}
                <img
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2Fverify.png?alt=media&token=a71c8756-0c9b-40a9-801a-9206916c1193"
                  }
                  className={`${showVerify} h-full w-full`}
                />
              </div>{" "}
            </div>

            <p className="text-[#8E8E8E]"> {cardProfileNickname} </p>
          </div>
        </div>
        {/* Card Settings */}
        <BsThreeDots className="cardItemsHover text-xl " />
      </div>

      {/* Card Image */}
      <div className="h-[585px] w-[468px]">
        <img src={cardImg} className="h-full w-full" />
      </div>

      {/* Card functionality */}
      <div className="flex flex-col">
        {/* Functionality Icons */}
        <div className="flex items-center justify-between p-3">
          <div className="flex gap-4">
            <FcLike
              className={`${
                isPostLiked ? "text-[24px]" : "hidden"
              } cursor-pointer`}
              onClick={() => {
                setIsPostLiked(false);
                setLikeNbrState((prevState) => prevState - 1);
              }}
            />
            <div
              className={`${isPostLiked ? "hidden" : ""} cursor-pointer`}
              onClick={() => {
                setIsPostLiked(true);
                setLikeNbrState((prevState) => prevState + 1);
              }}
            >
              <svg
                aria-label="Like"
                class="x1lliihq x1n2onr6"
                color={`${
                  isDarkModeActive ? "rgb(250, 250, 250)" : "rgb(0, 0, 0)"
                }`}
                fill={`${
                  isDarkModeActive ? "rgb(250, 250, 250)" : "rgb(0, 0, 0)"
                }`}
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Like</title>
                <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
              </svg>
            </div>

            <div onClick={() => ref.current.focus()} className="cursor-pointer">
              <svg
                aria-label="Comment"
                class="x1lliihq x1n2onr6"
                color={`${
                  isDarkModeActive ? "rgb(250, 250, 250)" : "rgb(0, 0, 0)"
                }`}
                fill={`${
                  isDarkModeActive ? "rgb(250, 250, 250)" : "rgb(0, 0, 0)"
                }`}
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Comment</title>
                <path
                  d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
            </div>

            <svg
              aria-label="Share Post"
              class="x1lliihq x1n2onr6"
              color={`${
                isDarkModeActive ? "rgb(250, 250, 250)" : "rgb(0, 0, 0)"
              }`}
              fill={`${
                isDarkModeActive ? "rgb(250, 250, 250)" : "rgb(0, 0, 0)"
              }`}
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Share Post</title>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
                x1="22"
                x2="9.218"
                y1="3"
                y2="10.083"
              ></line>
              <polygon
                fill="none"
                points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
              ></polygon>
            </svg>
          </div>
          <svg
            aria-label="Save"
            class="x1lliihq x1n2onr6"
            color={`${
              isDarkModeActive ? "rgb(250, 250, 250)" : "rgb(0, 0, 0)"
            }`}
            fill={`${isDarkModeActive ? "rgb(250, 250, 250)" : "rgb(0, 0, 0)"}`}
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <title>Save</title>
            <polygon
              fill="none"
              points="20 21 12 13.44 4 21 4 3 20 3 20 21"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></polygon>
          </svg>
        </div>
        {/* Likes and Comments */}
        <div className="flex flex-col gap-1 px-3">
          <p className="text-[14px] font-semibold">
            {" "}
            <span>{likeNbrState}</span> likes
          </p>

          <Link
            to="/profile"
            onClick={() => {
              setActiveProfile(cardProfileName);
            }}
          >
            <p className="cursor-pointer text-[14px] text-[#8E8E8E]">
              {" "}
              View All Comments{" "}
            </p>
          </Link>

          {/* Comment 1 */}
          <div className="flex gap-1 text-[14px]">
            <p className="font-semibold">{comment1Name}</p>
            <p> {comment1Content} </p>
          </div>
          {/* Comment 2 */}
          <div className="flex gap-1 text-[14px]">
            <p className="font-semibold"> {comment2Name}</p>
            <p> {comment2Content} </p>
          </div>
        </div>

        {/* Add a comment */}
        <div className="mt-2 border-t-[0.5px] border-instGrayish p-3">
          <div className="flex h-[20px] justify-between">
            <textarea
              type="text"
              placeholder="Add a comment..."
              className="grow resize-none text-[14px] outline-none placeholder:text-[#8E8E8E] dark:bg-black"
              ref={ref}
            />
            <p className="text-[14px] font-semibold text-[#0095F6] opacity-40 dark:text-[#b3dbff] dark:opacity-100">
              {" "}
              Post{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstCard;
