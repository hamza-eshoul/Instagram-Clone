import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

// icons
import { BsThreeDots } from "react-icons/bs";
import { FcLike } from "react-icons/fc";

// svgs
import { ReactComponent as LikeSvg } from "../assets/svg/Like.svg";
import { ReactComponent as CommentSvg } from "../assets/svg/Comment.svg";
import { ReactComponent as ShareSvg } from "../assets/svg/Share.svg";
import { ReactComponent as SaveSvg } from "../assets/svg/Save.svg";

// images
import defaultProfile from "../assets/images/defaultProfile.png";
import { useAddComment } from "../hooks/useAddComment";

// components
import PostFullSize from "./PostFullSize";
import DeletePost from "./DeletePost";
import { useUpdateLikes } from "../hooks/useUpdateLike";
import { useDocument } from "../hooks/useDocument";

const InstCard = ({ author, postImg, likes, comments, post_id, post }) => {
  const [postFullSize, setPostFullSize] = useState(false);
  const [commentContent, setCommentContent] = useState("");
  const [displayComments, setDisplayComments] = useState([]);
  const [deletePost, setDeletePost] = useState(false);
  const { isPostLike, likeNbr, updateLikes } = useUpdateLikes(likes);

  const { addCommentDb } = useAddComment();
  const { document: profile } = useDocument("profiles", author);
  const { user } = useAuthContext();
  const ref = useRef(null);

  useEffect(() => {
    if (comments.length === 0) {
      setDisplayComments(null);
    }
    if (comments.length === 1 || comments.length === 2) {
      setDisplayComments(comments);
    }
    if (comments.length > 2) {
      setDisplayComments([
        comments[comments.length - 1],
        comments[comments.length - 2],
      ]);
    }
  }, [comments]);

  const handleAddComment = () => {
    addCommentDb(comments, commentContent, post_id);

    setCommentContent("");
  };

  return (
    <article className="max-w-lg border-[0.5px] border-instGrayish bg-white sm:rounded-lg sm:border-[1px]">
      {deletePost && user.displayName === post.postAuthor && (
        <DeletePost setDeletePost={setDeletePost} post_id={post_id} />
      )}
      {/* Card Info */}
      <div className="flex items-center justify-between py-2 px-3">
        {/* Info */}
        <div className="flex items-center justify-center gap-3">
          {/* Profile Img */}
          <div className="h-8 w-8">
            {profile && (
              <img
                src={
                  profile.profileImgUrl ? profile.profileImgUrl : defaultProfile
                }
                className="h-full w-full rounded-full object-cover"
                alt="profile"
              />
            )}
          </div>
          {/* Name and nickname */}
          <div className="flex flex-col text-[14px]">
            <Link to={`/profile/${author}`}>
              {" "}
              <p className="cardItemsHover font-bold"> {author} </p>{" "}
            </Link>

            <span className="text-[#8E8E8E]"> {author} </span>
          </div>
        </div>
        {/* Card Settings */}
        <BsThreeDots
          className="cardItemsHover text-xl "
          onClick={() => setDeletePost(true)}
        />
      </div>

      {/* Card Image */}
      <div
        className="h-[600px] cursor-pointer"
        onClick={() => setPostFullSize(true)}
      >
        <img src={postImg} className="h-full w-full" alt="card" />
      </div>

      {/* Card functionality */}
      <div className="flex flex-col">
        {/* Functionality Icons */}
        <div className="flex items-center justify-between p-3">
          <div className="flex gap-4">
            {isPostLike && (
              <FcLike
                className="cursor-pointer text-[22px]"
                onClick={() => updateLikes()}
              />
            )}
            {!isPostLike && (
              <LikeSvg
                className="cursor-pointer"
                onClick={() => updateLikes()}
              />
            )}

            <CommentSvg
              onClick={() => ref.current.focus()}
              className="cursor-pointer"
            />

            <ShareSvg />
          </div>
          <SaveSvg />
        </div>
        {/* Likes and Comments */}
        <div className="flex flex-col gap-1 px-3">
          <p className="text-[14px] font-semibold">
            {" "}
            <span>{likeNbr}</span> likes
          </p>

          <p
            className="cursor-pointer text-[14px] text-[#8E8E8E]"
            onClick={() => setPostFullSize(true)}
          >
            {" "}
            View All Comments{" "}
          </p>

          {displayComments &&
            displayComments.map((comment) => (
              <div className="flex w-full gap-1 text-[14px]">
                <p className="font-semibold"> {comment.commentAuthor}</p>
                <p className="flex-grow text-justify">
                  {" "}
                  {comment.commentContent}
                </p>
              </div>
            ))}
        </div>

        {/* Add a comment */}
        <div className="mt-2 flex  justify-between border-t-[0.5px] border-instGrayish p-3">
          <textarea
            type="text"
            placeholder="Add a comment..."
            className="h-6 grow resize-none text-[14px] outline-none placeholder:text-[#8E8E8E]"
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
            ref={ref}
          />
          <p
            className={`text-[14px] font-semibold text-[#0095F6] ${
              commentContent === ""
                ? "pointer-events-none opacity-40"
                : "cursor-pointer opacity-100"
            }`}
            onClick={() => handleAddComment()}
          >
            {" "}
            Post{" "}
          </p>
        </div>
      </div>

      {postFullSize && (
        <PostFullSize post={post} setPostFullSize={setPostFullSize} />
      )}
    </article>
  );
};

export default InstCard;
