import { useCollection } from "../hooks/useCollection";

// components
import Loading from "../components/Loading";
import Error from "../components/Error";
import PostCard from "../components/PostCard";

const Explore = () => {
  const { documents, isPending, error } = useCollection("profiles_posts");

  return (
    <main className=" mb-20 md:ml-[80px] lg:ml-[244px]">
      {isPending && <Loading loadingHeight={"h-screen"} loadingSize={60} />}
      {error && <Error error={error} errorHeight={"h-screen"} />}
      {documents && (
        <section className="mx-auto flex max-w-2xl flex-wrap justify-center gap-8 pt-9 sm:justify-start md:pl-4 xl:max-w-5xl">
          {documents.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </section>
      )}
    </main>
  );
};

export default Explore;
