import InstCard from "./InstCard";

const InstCardList = ({ posts }) => {
  return (
    <section className="flex flex-col gap-2 sm:gap-4">
      {posts &&
        posts.map((post) => (
          <InstCard
            key={post.id}
            post_id={post.id}
            author={post.postAuthor}
            postImg={post.postImgUrl}
            likes={post.postLikes}
            comments={post.postComments}
            post={post}
          />
        ))}
    </section>
  );
};

export default InstCardList;
