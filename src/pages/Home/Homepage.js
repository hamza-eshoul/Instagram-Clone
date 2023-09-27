import { useCollection } from "../../hooks/useCollection";

// components
import Reels from "../../components/Reels";
import HomepageAside from "./HomepageAside";
import InstCardList from "../../components/InstCardList";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

const Homepage = ({ setIsReel }) => {
  const {
    documents: posts,
    error,
    isPending,
  } = useCollection("profiles_posts", null, ["createdAt", "desc"]);

  if (isPending) {
    return <Loading loadingHeight={"h-screen"} loadingSize={50} />;
  }

  if (error) {
    return <Error error={error} errorHeight={"h-screen"} />;
  }

  return (
    <div className="mb-20 flex dark:bg-hardDark md:ml-[50px] lg:ml-[244px]">
      <div className="mx-auto mt-10 flex max-w-7xl justify-center gap-20  dark:bg-hardDark">
        {/* Reels and Cards Section */}
        <section className="flex flex-col gap-4">
          {/* Reels */}
          <div className="hidden h-[119px] max-w-lg items-center gap-2 rounded-xl border-[1px] border-instGrayish bg-white py-4 px-4 dark:border-[#363636] dark:bg-hardDark md:flex">
            <Reels setIsReel={setIsReel} />
          </div>
          {/* Cards */}
          <InstCardList posts={posts} />
        </section>

        <HomepageAside />
      </div>
    </div>
  );
};

export default Homepage;
