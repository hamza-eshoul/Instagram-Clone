import ReactPlayer from "react-player/youtube";

// icons
import { RxCross2 } from "react-icons/rx";

// components
import Overlay from "./Overlay";

const ReelVideo = ({ setIsReel }) => {
  return (
    <>
      <div className="fixed left-[55%] top-[50%] z-40 mx-auto -translate-x-1/2 -translate-y-1/2 bg-white">
        <RxCross2
          className=" absolute top-[-40px] right-[-80px] cursor-pointer text-3xl text-white"
          onClick={() => {
            setIsReel(false);
          }}
        />
        <ReactPlayer
          url={"https://www.youtube.com/shorts/dFg8Nu2X5Mo"}
          playing={true}
          muted={true}
          loop={true}
          controls={false}
          height={500}
        />
      </div>
      <Overlay />
    </>
  );
};

export default ReelVideo;
