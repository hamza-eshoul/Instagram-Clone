import React from "react";

const Reels = ({ reelIcon, setIsReelVideoActive }) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-1 "
      onClick={() => setIsReelVideoActive(true)}
    >
      <div className="mt-1 flex h-[66px]  w-[66px] cursor-pointer items-center justify-center rounded-full border-[1px] border-red-500 dark:bg-white">
        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-[1px] border-instGrayish dark:border-[0px]">
          {" "}
          <img src={reelIcon} />
        </div>
      </div>
      <p className="text-[12px] dark:text-white"> instagram </p>
    </div>
  );
};

export default Reels;
