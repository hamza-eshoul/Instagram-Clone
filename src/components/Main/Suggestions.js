import React from "react";
import verify from "../../img/verify.png";

const Suggestion = ({ suggestionImg, suggestionName, suggestionUrl }) => {
  return (
    <div
      onClick={() => window.open(suggestionUrl, "_blank", "noreferrer")}
      className="flex w-[319px] cursor-pointer justify-between"
    >
      {/* Img and Desc */}
      <div className="flex items-center justify-center gap-2">
        {/* Img */}
        <div className="h-8 w-8">
          <img
            src={suggestionImg}
            className="h-full w-full rounded-full object-cover "
          />
        </div>
        {/* Desc */}
        <div>
          {" "}
          <div className="flex items-center justify-center gap-0.5">
            <p className="text-[14px] font-bold"> {suggestionName} </p>
            <div className="h-4 w-4">
              {" "}
              <img src={verify} className="h-full w-full" />
            </div>{" "}
          </div>
          <p className="text-[12px] text-[#8E8E8E]"> Popular </p>
        </div>
      </div>

      {/* Follow */}
      <p className="cursor-pointer text-[12px] font-semibold text-[#0095F6]">
        {" "}
        Follow{" "}
      </p>
    </div>
  );
};

export default Suggestion;
