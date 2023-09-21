import React from "react";

import { Link } from "react-router-dom";

const Suggestion = ({ suggestionImg, suggestionName, setActiveProfile }) => {
  return (
    <Link to="/profile" onClick={() => setActiveProfile(suggestionName)}>
      {" "}
      <div className="flex w-[319px] cursor-pointer justify-between">
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
              <p className="text-[14px] font-bold dark:text-white">
                {" "}
                {suggestionName}{" "}
              </p>
              <div className="h-4 w-4">
                {" "}
                <img
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2Fverify.png?alt=media&token=a71c8756-0c9b-40a9-801a-9206916c1193"
                  }
                  className="h-full w-full"
                />
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
    </Link>
  );
};

export default Suggestion;
