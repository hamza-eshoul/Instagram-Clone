// svg
import { ReactComponent as Postgate } from "../../assets/svg/Postgate.svg";

// components
import PostCard from "../../components/PostCard";

const ProfilePosts = ({ posts }) => {
  return (
    <section className="mt-7 mb-5 w-full border-t-[1px] border-instGrayish md:mb-auto">
      <div className="flex items-center justify-center gap-1 pt-4 pb-3 font-semibold">
        <Postgate />
        <span className="cursor-pointer text-xs">POSTS </span>
      </div>
      {/* Posts */}
      <div className="flex flex-wrap justify-center gap-7 pl-0 sm:justify-start sm:pl-4 ">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>{" "}
    </section>
  );
};

export default ProfilePosts;
