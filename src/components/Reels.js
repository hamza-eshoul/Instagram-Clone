const Reels = ({ setIsReel }) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-1 "
      onClick={() => setIsReel(true)}
    >
      <div className="mt-1 flex h-[66px] w-[66px] cursor-pointer items-center justify-center rounded-full border-[1px] border-red-500 dark:bg-white">
        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-[1px] border-instGrayish dark:border-[0px]">
          {" "}
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/instReel.png?alt=media&token=280811d0-d80e-4625-93f4-1d9ec4451d9b"
            }
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <p className="text-[12px] dark:text-white"> instagram </p>
    </div>
  );
};

export default Reels;
