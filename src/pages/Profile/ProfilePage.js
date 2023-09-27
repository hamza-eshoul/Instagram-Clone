import { useDocument } from "../../hooks/useDocument";
import { useCollection } from "../../hooks/useCollection";
import { useParams } from "react-router-dom";

// components
import ProfileHead from "./ProfileHead";
import ProfilePosts from "./ProfilePosts";
import ProfileFooter from "./ProfileFooter";
import Error from "../../components/Error";

const ProfilePage = () => {
  const { profileName } = useParams();
  const { document: profile, error } = useDocument("profiles", profileName);
  const { documents: posts, error: postsError } = useCollection(
    "profiles_posts",
    ["postAuthor", "==", profileName]
  );

  return (
    <div className="flex h-screen w-screen dark:bg-hardDark dark:text-white">
      {/* Profile Section */}
      <section className="ml-[240px] flex flex-grow flex-col items-center gap-2">
        {profile && posts && (
          <ProfileHead profile={profile} postsLength={posts.length} />
        )}

        {postsError && <Error error={postsError} />}

        {posts && <ProfilePosts posts={posts} />}

        <ProfileFooter />
      </section>
    </div>
  );
};

export default ProfilePage;
