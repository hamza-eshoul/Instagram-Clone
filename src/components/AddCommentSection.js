import { useRef } from "react";
import { useUpdateLikes } from "../hooks/useUpdateLike";
import { useAddComment } from "../hooks/useAddComment";

// icons
import { FcLike } from "react-icons/fc";

// svgs
import { ReactComponent as LikeSvg } from "../assets/svg/Like.svg";
import { ReactComponent as CommentSvg } from "../assets/svg/Comment.svg";
import { ReactComponent as ShareSvg } from "../assets/svg/Share.svg";
import { ReactComponent as SaveSvg } from "../assets/svg/Save.svg";

const AddCommentSection = ({ post }) => {
  const { isPostLike, likeNbr, updateLikes } = useUpdateLikes(post.postLikes);
  const { addCommentDb } = useAddComment();
  const ref = useRef(null);

  const handleAddComment = (e) => {
    e.preventDefault();
    const commentContent = e.target.elements[0].value;
    const postComments = post.postComments;
    const post_id = post.id;
    addCommentDb(postComments, commentContent, post_id);
  };

  return (
    <div className="mb-5 flex flex-col gap-4 border-t-[1px] border-instGrayish border-opacity-50">
      {/* Functionality Icons */}
      <div className=" hidden justify-between px-4 pt-3 sm:flex">
        <div className="flex cursor-pointer items-center justify-center gap-4">
          {isPostLike && (
            <FcLike
              className="cursor-pointer text-[26px]"
              onClick={() => updateLikes()}
            />
          )}
          {!isPostLike && (
            <LikeSvg className="cursor-pointer" onClick={() => updateLikes()} />
          )}

          <CommentSvg onClick={() => ref.current.focus()} />

          <ShareSvg />
        </div>

        <SaveSvg />
      </div>
      <div className="hidden flex-col px-4 lg:flex">
        <span className="text-[14px] font-semibold"> {likeNbr} likes </span>
        <time className="text-[10px] opacity-50">
          {" "}
          {post.postTime.toUpperCase()} AGO{" "}
        </time>
      </div>

      {/* Add a comment */}
      <form
        className="flex justify-between border-t-[0.5px] border-instGrayish px-3 pt-3"
        onSubmit={handleAddComment}
      >
        <textarea
          type="text"
          required
          placeholder="Add a comment..."
          className="h-5 grow resize-none text-[14px] outline-none placeholder:text-[#8E8E8E]"
          ref={ref}
        />
        <button className={`text-[14px]  font-semibold text-[#0095F6]`}>
          {" "}
          Post{" "}
        </button>
      </form>
    </div>
  );
};

export default AddCommentSection;
