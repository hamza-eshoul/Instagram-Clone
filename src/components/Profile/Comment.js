import React from "react";

const Comment = ({ commentName, commentContent, commentImg, commentTime }) => {
  return (
    <div className="flex gap-3.5 px-4 py-2">
      <div className="h-[32px] w-[32px]">
        <img src={commentImg} className="h-full w-full rounded-full" />
      </div>

      <div className="flex w-[480px] flex-col gap-1">
        <p className="text-justify text-sm">
          {" "}
          <span className="font-semibold">{commentName}</span> {commentContent}
        </p>
        <p className="text-xs opacity-50"> {commentTime} </p>
      </div>
    </div>
  );
};

export default Comment;
