import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useAuthContext } from "../hooks/useAuthContext";
import { useDocument } from "../hooks/useDocument";
import { Link } from "react-router-dom";

// images
import defaultProfile from "../assets/images/defaultProfile.png";

// icons
import { BsThreeDots } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

// components
import DeletePost from "./DeletePost";
import Overlay from "./Overlay";
import Comment from "./Comment";
import AddCommentSection from "./AddCommentSection";

const PostFullSize = ({ post, setPostFullSize }) => {
  const [deletePost, setDeletePost] = useState(false);
  const { user } = useAuthContext();
  const { document: profile } = useDocument("profiles", post.postAuthor);

  return (
    <>
      <Overlay />
      {deletePost && user.displayName === post.postAuthor && (
        <DeletePost setDeletePost={setDeletePost} post_id={post.id} />
      )}

      {/* Post */}
      <section className="fixed left-[50%] top-[50%] z-10 mx-auto flex h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 flex-col rounded-xl bg-black lg:flex-row">
        {/* Post Close Icon */}
        <RxCross2
          className="fixed right-1 z-10 cursor-pointer text-3xl text-white lg:right-[-50px] lg:top-[-20px] "
          onClick={() => setPostFullSize(false)}
        />
        {/* Post Left Part */}
        <div className="h-[50%] w-full lg:h-full lg:w-[60%]">
          <img src={post.postImgUrl} className="h-full w-full" alt="post" />
        </div>
        {/* Post Right Part */}
        <div className="flex h-[50%] w-full flex-col rounded-r-xl bg-white text-black lg:h-full lg:w-[40%]">
          {/* Profile Info  */}
          <div className="flex items-center justify-between border-b-[1px] border-instGrayish border-opacity-50 px-4 py-3.5">
            <div className="flex items-center gap-3.5">
              {profile && (
                <img
                  src={
                    profile.profileImgUrl
                      ? profile.profileImgUrl
                      : defaultProfile
                  }
                  className="h-8 w-8 rounded-full"
                  alt="profile"
                />
              )}

              <Link
                to={`/profile/${post.postAuthor}`}
                className=" text-sm font-semibold"
              >
                {" "}
                {post.postAuthor}
                <span className="pl-2">•</span>
              </Link>

              <span className="text-sm font-semibold text-lightBlue">
                {" "}
                Follow
              </span>
            </div>

            <BsThreeDots
              className="cardItemsHover text-xl"
              onClick={() => {
                setDeletePost(true);
              }}
            />
          </div>
          {/* Caption  */}
          <div className="flex gap-3.5 px-4 py-3.5">
            {profile && (
              <img
                src={
                  profile.profileImgUrl ? profile.profileImgUrl : defaultProfile
                }
                className="h-8 w-8 rounded-full"
                alt="profile"
              />
            )}

            <div className="flex flex-col gap-1 ">
              <p className="text-justify text-sm">
                {" "}
                <span className="font-semibold">{post.postAuthor}</span>{" "}
                {post.postCaption}
              </p>
              <p className="text-xs opacity-50"> </p>
            </div>
          </div>
          {/* Comments section */}
          <div className="mb-auto overflow-scroll">
            {post.postComments &&
              post.postComments.map((comment) => (
                <Comment
                  key={uuidv4()}
                  commentAuthor={comment.commentAuthor}
                  commentContent={comment.commentContent}
                  commentImgUrl={
                    comment.commentImgUrl ? comment.commentImgUrl : null
                  }
                />
              ))}
          </div>

          <AddCommentSection post={post} />
        </div>{" "}
      </section>
    </>
  );
};

export default PostFullSize;
