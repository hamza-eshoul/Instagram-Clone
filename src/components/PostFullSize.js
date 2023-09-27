import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useAuthContext } from "../hooks/useAuthContext";

// images
import defaultProfile from "../assets/images/defaultProfile.png";

// icons
import { BsThreeDots } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";

// svgs
import { ReactComponent as LikeSvg } from "../assets/svg/Like.svg";
import { ReactComponent as CommentSvg } from "../assets/svg/Comment.svg";
import { ReactComponent as ShareSvg } from "../assets/svg/Share.svg";
import { ReactComponent as SaveSvg } from "../assets/svg/Save.svg";

// components
import DeletePost from "./DeletePost";
import Overlay from "./Overlay";
import Comment from "./Comment";
import { useAddComment } from "../hooks/useAddComment";
import { useUpdateLikes } from "../hooks/useUpdateLike";

const PostFullSize = ({ post, setPostFullSize }) => {
  const [deletePost, setDeletePost] = useState(false);
  const [commentContent, setCommentContent] = useState("");
  const { addCommentDb } = useAddComment();
  const { user } = useAuthContext();
  const { isPostLike, likeNbr, updateLikes } = useUpdateLikes(post.postLikes);

  const ref = useRef(null);

  const handleAddComment = () => {
    const postComments = post.postComments;
    const post_id = post.id;

    addCommentDb(postComments, commentContent, post_id);

    setCommentContent("");
  };

  return (
    <div>
      <Overlay />
      {deletePost && user.displayName == post.postAuthor && (
        <DeletePost setDeletePost={setDeletePost} post_id={post.id} />
      )}

      {/* Post */}
      <div className="fixed left-[55%] top-[50%] z-10 mx-auto flex h-[900px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-black">
        {/* Post Close Icon */}
        <RxCross2
          className="absolute right-[-130px] top-[-40px] z-10 cursor-pointer text-3xl text-white "
          onClick={() => setPostFullSize(false)}
        />
        {/* Post Left Part */}
        <div className="h-full w-[750px]">
          <img
            src={post.postImgUrl}
            className="h-full w-full object-fill py-20"
          />
        </div>
        {/* Post Right Part */}
        <div className="h-full  rounded-r-xl bg-white text-black dark:bg-hardDark dark:text-white">
          {/* Info section */}
          <div className="flex items-center justify-between border-b-[1px] border-instGrayish border-opacity-50 px-4 py-3.5">
            <div className="flex items-center gap-3.5">
              <div className="h-[32px] w-[32px]">
                <img
                  src={post.postAuthorImg ? post.postAuthorImg : defaultProfile}
                  className="rounded-full"
                />
              </div>
              <p className=" text-sm font-semibold">
                {" "}
                {post.postAuthor}
                <span className="pl-2">•</span>
              </p>

              <p className="text-sm font-semibold text-lightBlue"> Follow</p>
            </div>

            <BsThreeDots
              className="cardItemsHover text-xl"
              onClick={() => {
                setDeletePost(true);
              }}
            />
          </div>
          {/* Caption section  */}
          <div className="flex gap-3.5 px-4 py-3.5">
            <div className="h-[32px] w-[32px]">
              <img
                src={post.postAuthorImg ? post.postAuthorImg : defaultProfile}
                className="h-full w-full rounded-full"
              />
            </div>

            <div className="flex w-[480px] flex-col gap-1 ">
              <p className="text-justify text-sm">
                {" "}
                <span className="font-semibold">{post.postAuthor}</span>{" "}
                {post.postCaption}
              </p>
              <p className="text-xs opacity-50"> </p>
            </div>
          </div>
          {/* Comments section */}
          <div className="h-[620px] border-b-[1px] border-instGrayish border-opacity-50">
            {post.postComments &&
              post.postComments.map((comment) => (
                <Comment
                  key={uuidv4()}
                  commentAuthor={comment.commentAuthor}
                  commentContent={comment.commentContent}
                  commentImgUrl={comment.commentImgUrl}
                />
              ))}
          </div>
          {/* Add a comment section */}
          <div className="flex flex-col gap-4">
            {/* Functionality Icons */}
            <div className="flex justify-between px-4 pt-3">
              <div className="flex cursor-pointer items-center justify-center gap-4">
                <div className="cursor-pointer" onClick={() => updateLikes()}>
                  {isPostLike && <FcLike className="text-[26px]" />}
                  {!isPostLike && <LikeSvg />}
                </div>

                {/* Comment Icon */}
                <div onClick={() => ref.current.focus()}>
                  <CommentSvg />
                </div>

                <ShareSvg />
              </div>

              <SaveSvg />
            </div>
            <div className="flex flex-col px-4">
              <p className="text-[14px] font-semibold"> {likeNbr} likes </p>
              <p className="text-[10px] opacity-50">
                {" "}
                {post.postTime.toUpperCase()} AGO{" "}
              </p>
            </div>

            {/* Add a comment */}
            <div className="border-t-[0.5px] border-instGrayish px-3 pt-3">
              <div className="flex h-[20px] justify-between">
                <textarea
                  type="text"
                  placeholder="Add a comment..."
                  className="grow resize-none text-[14px] outline-none placeholder:text-[#8E8E8E] dark:bg-hardDark"
                  value={commentContent}
                  onChange={(e) => {
                    setCommentContent(e.target.value);
                  }}
                  ref={ref}
                />
                <p
                  className={`${
                    commentContent === ""
                      ? "pointer-events-none opacity-40"
                      : "cursor-pointer opacity-100"
                  }  text-[14px]  font-semibold text-[#0095F6] dark:text-[#b3dbff] dark:opacity-100`}
                  onClick={() => {
                    handleAddComment();
                  }}
                >
                  {" "}
                  Post{" "}
                </p>
              </div>
            </div>
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default PostFullSize;
