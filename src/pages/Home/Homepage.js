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
    <main className="mb-20 flex  md:ml-[50px] lg:ml-[244px]">
      <section className="mx-auto mt-10 flex max-w-7xl justify-center gap-20  ">
        {/* Reels and Cards Section */}
        <section className="flex flex-col gap-4">
          {/* Reels */}

          <Reels setIsReel={setIsReel} />

          {/* Cards */}
          <InstCardList posts={posts} />
        </section>

        <HomepageAside />
      </section>
    </main>
  );
};

export default Homepage;
