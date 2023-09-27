import { Link } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";

// components
import Loading from "../components/Loading";
import Error from "../components/Error";
import PostCard from "../components/PostCard";

const Explore = () => {
  const { documents, isPending, error } = useCollection("profiles_posts");

  return (
    <div
      className={`ml-[243px] flex grow justify-center bg-[#FAFAFA] dark:bg-hardDark`}
    >
      {isPending && <Loading loadingHeight={"h-screen"} loadingSize={60} />}
      {error && <Error error={error} errorHeight={"h-screen"} />}
      {documents && (
        <div className="flex w-[960px] flex-wrap gap-8 pt-9">
          {documents.map((post) => (
            <Link to={`/profile/${post.postAuthor}`}>
              <PostCard key={post.id} post={post} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Explore;
