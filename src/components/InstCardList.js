import { useCollection } from "../hooks/useCollection";

// components
import InstCard from "./InstCard";
import Error from "./Error";
import Loading from "./Loading";

const InstCardList = () => {
  const {
    documents: posts,
    error,
    isPending,
  } = useCollection("profiles_posts", null, ["createdAt", "desc"]);

  return (
    <div className="flex flex-col gap-3">
      {isPending && <Loading loadingHeight={"h-screen"} loadingSize={50} />}
      {error && <Error error={error} />}
      {posts &&
        posts.map((post) => (
          <InstCard
            key={post.id}
            post_id={post.id}
            authorImg={post.postAuthorImg}
            author={post.postAuthor}
            postImg={post.postImgUrl}
            likes={post.postLikes}
            comments={post.postComments}
            post={post}
          />
        ))}
    </div>
  );
};

export default InstCardList;
