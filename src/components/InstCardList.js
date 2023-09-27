import InstCard from "./InstCard";

const InstCardList = ({ posts }) => {
  return (
    <div className="flex flex-col gap-4">
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
