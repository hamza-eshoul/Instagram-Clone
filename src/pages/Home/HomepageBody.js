// components
import Reels from "./Reels";

import ReelVideo from "./ReelVideo";
import HomepageAside from "./HomepageAside";
import InstCardList from "./InstCardList";

const HomepageBody = ({ isReelVideoActive, setIsReelVideoActive }) => {
  return (
    <div
      className={`ml-[243px] flex grow justify-center gap-8 bg-[#FAFAFA] dark:bg-hardDark`}
    >
      {/* Reel Video */}
      {isReelVideoActive && (
        <ReelVideo setIsReelVideoActive={setIsReelVideoActive} />
      )}

      {/* Reels and Cards Section */}
      <section className="flex flex-col gap-4">
        <div className="mt-4 flex h-[119px] w-[470px] items-center gap-2 rounded-xl border-[1px] border-instGrayish bg-white py-4 px-4 dark:border-[#363636] dark:bg-hardDark">
          <Reels
            reelIcon={
              "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2FHomeImg%2Finstagram-reel.png?alt=media&token=155e9ba3-8ad4-401e-ab14-e9b29e0055cc"
            }
            setIsReelVideoActive={setIsReelVideoActive}
          />
        </div>
        {/* Cards */}
        <InstCardList />
      </section>

      <HomepageAside />
    </div>
  );
};

export default HomepageBody;
