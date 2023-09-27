import ReactPlayer from "react-player/youtube";

// icons
import { RxCross2 } from "react-icons/rx";

// components
import Overlay from "./Overlay";

const ReelVideo = ({ setIsReel }) => {
  return (
    <>
      <div className="fixed z-40  h-screen w-screen bg-white">
        <RxCross2
          className="fixed right-1 top-1 cursor-pointer text-3xl text-white"
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
          height={"100%"}
          width={"100%"}
        />
      </div>
      <Overlay />
    </>
  );
};

export default ReelVideo;
