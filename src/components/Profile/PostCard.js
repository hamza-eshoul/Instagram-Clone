import React from "react";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

const PostCard = ({
  openPost,
  postImg,
  postCaption,
  postComments,
  postLikes,
  postTime,
  nbrComments,
  isPostLiked,
  postId,
}) => {
  return (
    <div className="group relative h-[293px] w-[293px]">
      <img
        src={postImg}
        className="h-full w-full cursor-pointer object-fill "
      />{" "}
      {/* PostCard Overlay */}
      <div
        className={`absolute top-0 bottom-0 right-0 left-0 cursor-pointer bg-[#262626] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-80`}
        onClick={() => {
          openPost(
            postImg,
            postCaption,
            postComments,
            postLikes,
            postTime,
            nbrComments,
            isPostLiked,
            postId
          );
        }}
      >
        {/* Overlay Content */}
        <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-7 text-center">
          {/* Likes Icon */}
          <div className="flex items-center justify-center gap-1 font-extrabold text-white opacity-100">
            <AiOutlineHeart className="text-[27px]" />
            <p>{postLikes}</p>
          </div>

          {/* Comments Icon */}
          <div className="flex items-center justify-center gap-1 font-extrabold text-white opacity-100">
            <FaRegComment className="text-[24px]" />
            <p> {nbrComments} </p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default PostCard;
