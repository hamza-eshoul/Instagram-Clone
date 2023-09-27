import React from "react";

const Comment = ({ commentAuthor, commentContent, commentImgUrl }) => {
  return (
    <div className="flex gap-3.5 px-4 py-2">
      <div className="h-[32px] w-[32px]">
        <img src={commentImgUrl} className="h-full w-full rounded-full" />
      </div>

      <div className="flex w-[480px] flex-col gap-1">
        <p className="text-justify text-sm">
          {" "}
          <span className="font-semibold">{commentAuthor}</span>{" "}
          {commentContent}
        </p>
      </div>
    </div>
  );
};

export default Comment;
