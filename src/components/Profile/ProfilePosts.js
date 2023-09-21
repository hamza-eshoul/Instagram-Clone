import React, { useEffect } from "react";
import PostCard from "./PostCard";
import { v4 as uuidv4 } from "uuid";

const ProfilePosts = ({ openPost, posts }) => {
  return (
    <div className="mt-7 mb-7 border-t-[1px] border-instGrayish">
      <div className="flex items-center justify-center gap-1 pt-4 pb-3 font-semibold">
        <svg
          aria-label=""
          class="_ab6-"
          color="rgb(0, 0, 0)"
          fill="rgb(0, 0, 0)"
          height="12"
          role="img"
          viewBox="0 0 24 24"
          width="12"
        >
          <rect
            fill="none"
            height="18"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            width="18"
            x="3"
            y="3"
          ></rect>
          <line
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            x1="9.015"
            x2="9.015"
            y1="3"
            y2="21"
          ></line>
          <line
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            x1="14.985"
            x2="14.985"
            y1="3"
            y2="21"
          ></line>
          <line
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            x1="21"
            x2="3"
            y1="9.015"
            y2="9.015"
          ></line>
          <line
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            x1="21"
            x2="3"
            y1="14.985"
            y2="14.985"
          ></line>
        </svg>
        <p className="cursor-pointer text-xs">POSTS </p>
      </div>
      {/* Posts */}
      <div className="flex w-[935px] flex-wrap gap-7">
        {posts.map((post) => (
          <PostCard
            openPost={openPost}
            postImg={post.postImgUrl}
            postCaption={post.postCaption}
            postComments={post.postComments}
            postLikes={post.postLikes}
            postTime={post.postTime}
            nbrComments={post.nbrComments}
            isPostLiked={post.isPostLiked}
            postId={post.postId}
            key={uuidv4()}
          />
        ))}
      </div>{" "}
    </div>
  );
};

export default ProfilePosts;
