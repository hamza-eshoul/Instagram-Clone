import React from "react";

import { Link } from "react-router-dom";

const Suggestion = ({ suggestionImage, suggestionName }) => {
  return (
    <article className="flex cursor-pointer justify-between">
      {/* Img and Desc */}
      <div className="flex items-center justify-center gap-2">
        {/* Img */}
        <div className="h-8 w-8">
          <img
            src={suggestionImage}
            className="h-full w-full rounded-full object-cover"
            alt="suggestion"
          />
        </div>
        {/* Desc */}
        <div>
          <div className="flex items-center gap-1">
            <Link
              to={`/profile/${suggestionName}`}
              className="text-[14px] font-bold "
            >
              {" "}
              {suggestionName}{" "}
            </Link>{" "}
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/verify.jpg?alt=media&token=ee31a9cd-cc7d-4293-a15d-1408c2c06690"
              }
              className="h-4 w-4"
              alt="verify"
            />
          </div>

          <p className="text-[12px] text-[#8E8E8E]"> Popular </p>
        </div>
      </div>

      {/* Follow */}
      <span className="cursor-pointer text-[12px] font-semibold text-[#0095F6]">
        {" "}
        Follow{" "}
      </span>
    </article>
  );
};

export default Suggestion;
