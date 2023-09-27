import { useState } from "react";

// icons
import { FaRegComment } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

// components
import PostFullSize from "./PostFullSize";

const PostCard = ({ post }) => {
  const [postFullSize, setPostFullSize] = useState(false);

  return (
    <div className="group relative h-[293px] w-[293px]">
      <img
        src={post.postImgUrl}
        className="h-full w-full cursor-pointer object-fill "
      />{" "}
      {/* Post Card */}
      <div
        className={`absolute top-0 bottom-0 right-0 left-0 cursor-pointer bg-[#262626] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-80`}
        onClick={() => {
          setPostFullSize(true);
        }}
      >
        {/* Overlay Content */}
        <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-7 text-center">
          {/* Likes Icon */}
          <div className="flex items-center justify-center gap-1 font-extrabold text-white opacity-100">
            <AiOutlineHeart className="text-[27px]" />
            <p>{post.postLikes}</p>
          </div>

          {/* Comments Icon */}
          <div className="flex items-center justify-center gap-1 font-extrabold text-white opacity-100">
            <FaRegComment className="text-[24px]" />
            <p>{post.postComments.length} </p>
          </div>
        </div>
      </div>{" "}
      {/* Post Full Size */}
      {postFullSize && (
        <PostFullSize post={post} setPostFullSize={setPostFullSize} />
      )}
    </div>
  );
};

export default PostCard;
