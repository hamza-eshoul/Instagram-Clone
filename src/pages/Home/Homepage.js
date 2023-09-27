// components
import Reels from "../../components/Reels";
import HomepageAside from "./HomepageAside";
import InstCardList from "../../components/InstCardList";

const Homepage = ({ setIsReel }) => {
  return (
    <div className="my-10 flex dark:bg-hardDark md:ml-[50px] lg:ml-[244px]">
      <div className="mx-auto flex max-w-7xl justify-center gap-20  dark:bg-hardDark">
        {/* Reels and Cards Section */}
        <section className="flex flex-col gap-4">
          {/* Reels */}
          <div className=" hidden h-[119px] max-w-lg items-center gap-2 rounded-xl border-[1px] border-instGrayish bg-white py-4 px-4 dark:border-[#363636] dark:bg-hardDark md:flex">
            <Reels setIsReel={setIsReel} />
          </div>
          {/* Cards */}
          <InstCardList />
        </section>

        <HomepageAside />
      </div>
    </div>
  );
};

export default Homepage;
