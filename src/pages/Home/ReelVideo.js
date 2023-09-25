import ReactPlayer from "react-player";

// icons
import { RxCross2 } from "react-icons/rx";

// components
import Overlay from "../../components/Overlay";

const ReelVideo = ({ setIsReelVideoActive }) => {
  return (
    <>
      <div className="absolute top-[100px] left-[600px] z-40 bg-white">
        <RxCross2
          className=" absolute top-[-40px] right-[-80px] cursor-pointer text-3xl text-white"
          onClick={() => {
            setIsReelVideoActive(false);
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
