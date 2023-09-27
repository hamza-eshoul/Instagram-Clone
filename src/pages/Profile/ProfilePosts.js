// svg
import { ReactComponent as Postgate } from "../../assets/svg/Postgate.svg";

// components
import PostCard from "../../components/PostCard";

const ProfilePosts = ({ posts }) => {
  return (
    <div className="mt-7 mb-7 border-t-[1px] border-instGrayish">
      <div className="flex items-center justify-center gap-1 pt-4 pb-3 font-semibold">
        <Postgate />
        <p className="cursor-pointer text-xs">POSTS </p>
      </div>
      {/* Posts */}
      <div className="flex w-[935px] flex-wrap gap-7">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>{" "}
    </div>
  );
};

export default ProfilePosts;
