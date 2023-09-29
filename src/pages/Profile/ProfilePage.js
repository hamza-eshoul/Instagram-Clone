import { useDocument } from "../../hooks/useDocument";
import { useCollection } from "../../hooks/useCollection";
import { useParams } from "react-router-dom";

// components
import ProfileHead from "./ProfileHead";
import ProfilePosts from "./ProfilePosts";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import Footer from "../../components/Footer";

const ProfilePage = () => {
  const { profileName } = useParams();
  const { document: profile, error } = useDocument("profiles", profileName);
  const {
    documents: posts,
    error: postsError,
    isPending,
  } = useCollection(
    "profiles_posts",
    ["postAuthor", "==", profileName],
    ["createdAt", "desc"]
  );

  if (isPending) {
    return <Loading loadingHeight={"h-screen"} loadingSize={50} />;
  }

  if (error) {
    return <Error error={error} errorHeight={"h-screen"} />;
  }

  return (
    <>
      <main className="md:ml-[100px] lg:ml-[244px]">
        {/* Profile Section */}
        <section className="mx-auto mb-10 flex min-h-screen max-w-2xl flex-col items-center gap-2 xl:max-w-5xl">
          {profile && posts && (
            <ProfileHead profile={profile} postsLength={posts.length} />
          )}

          {postsError && <Error error={postsError} />}

          {posts && <ProfilePosts posts={posts} />}
        </section>
      </main>

      <Footer profileFooter={"lg:ml-[246px] md:ml-[100px] hidden md:flex"} />
    </>
  );
};

export default ProfilePage;
