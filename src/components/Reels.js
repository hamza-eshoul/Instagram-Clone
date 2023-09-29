const Reels = ({ setIsReel }) => {
  return (
    <>
      <div
        className="hidden h-[119px] max-w-lg  gap-2 rounded-xl border-[1px] border-instGrayish bg-white py-4 px-4 md:flex md:flex-col"
        onClick={() => setIsReel(true)}
      >
        <div className="mt-1 flex h-[66px] w-[66px] cursor-pointer items-center justify-center rounded-full border-[1px] border-red-500">
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-[1px] border-instGrayish">
            {" "}
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/instReel.png?alt=media&token=280811d0-d80e-4625-93f4-1d9ec4451d9b"
              }
              className="h-full w-full object-cover"
              alt="instagram reel"
            />
          </div>
        </div>
        <p className="pl-1 text-[12px]"> instagram </p>
      </div>
    </>
  );
};

export default Reels;
