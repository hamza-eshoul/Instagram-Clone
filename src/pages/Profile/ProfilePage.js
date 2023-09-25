import Sidebar from "../../pages/Home/Sidebar";
import ProfileHead from "./ProfileHead";
import ProfilePosts from "./ProfilePosts";
import { db } from "../../firebase/config";
import { collection, getDocs, doc } from "firebase/firestore";

import ProfileFooter from "./ProfileFooter";
import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";

const ProfilePage = ({
  setActiveProfile,
  isDarkModeActive,
  setIsDarkModeActive,
  userInfo,
  isSearchActive,
  setIsSearchActive,
  fetchSearchProfile,
}) => {
  const { profileName: prof } = useParams();
  const { document: profile, error } = useDocument("profiles", prof);

  // Posts State

  // const fetchProfile = (profile) => {
  //   const profileRef = doc(db, "profiles", `${profile}`);
  //   getDoc(profileRef).then((profile) => {
  //     setProfileName(profile.data().profileName);
  //     setProfileImgUrl(profile.data().profileImgUrl);
  //     setProfileFollowersNbr(profile.data().nbrFollowers);
  //     setProfileFollowingNbr(profile.data().nbrFollowing);
  //   });

  //   if (posts.length > 0) {
  //     return;
  //   } else {
  //     const postsRef = collection(db, "profiles", `${profile}`, "profilePosts");

  //     getDocs(postsRef).then((snapshot) => {
  //       snapshot.docs.forEach((doc) => {
  //         if (!doc.data().postComments) {
  //           setPosts((prevPosts) => [
  //             ...prevPosts,
  //             {
  //               postImgUrl: doc.data().postImgUrl,
  //               postCaption: doc.data().postCaption,
  //               postLikes: doc.data().postLikes,
  //               postTime: doc.data().postTime,
  //               nbrComments: doc.data().nbrComments,
  //               isPostLiked: doc.data().isPostLiked,
  //               postId: doc.id,
  //             },
  //           ]);
  //         } else {
  //           setPosts((prevPosts) => [
  //             ...prevPosts,
  //             {
  //               postImgUrl: doc.data().postImgUrl,
  //               postCaption: doc.data().postCaption,
  //               postLikes: doc.data().postLikes,
  //               postTime: doc.data().postTime,
  //               nbrComments: doc.data().nbrComments,
  //               isPostLiked: doc.data().isPostLiked,
  //               postId: doc.id,
  //               postComments: [
  //                 {
  //                   commentContent:
  //                     doc.data().postComments.comment1.commentContent,
  //                   commentImgUrl:
  //                     doc.data().postComments.comment1.commentImgUrl,
  //                   commentName: doc.data().postComments.comment1.commentName,
  //                 },
  //                 {
  //                   commentContent:
  //                     doc.data().postComments.comment2.commentContent,
  //                   commentImgUrl:
  //                     doc.data().postComments.comment2.commentImgUrl,
  //                   commentName: doc.data().postComments.comment2.commentName,
  //                 },
  //                 {
  //                   commentContent:
  //                     doc.data().postComments.comment3.commentContent,
  //                   commentImgUrl:
  //                     doc.data().postComments.comment3.commentImgUrl,
  //                   commentName: doc.data().postComments.comment3.commentName,
  //                 },
  //                 {
  //                   commentContent:
  //                     doc.data().postComments.comment4.commentContent,
  //                   commentImgUrl:
  //                     doc.data().postComments.comment4.commentImgUrl,
  //                   commentName: doc.data().postComments.comment4.commentName,
  //                 },
  //               ],
  //             },
  //           ]);
  //         }
  //       });
  //     });
  //   }
  // };

  const fetchProfilePosts = () => {
    const colRef = collection(db, "profiles", "cristiano", "profilePosts");

    getDocs(colRef).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        console.log(doc.data());
      });
    });
  };

  const updateProfilePosts = () => {
    const docRef = doc(db, "profiles", "cristiano");

    // getDoc(docRef).then((snapshot) => {
    //   console.log(snapshot.data());
    // });

    // profilePosts: {
    //   postComments: [
    //     {
    //       commentImgUrl:
    //         "https://randomuser.me/api/portraits/med/women/83.jpg",
    //       commentContent: "My king my goat is cr7❤️🙌👏👑",
    //       commentAuthor: "Priyanka Fernandes",
    //     },
    //     {
    //       commentImgUrl: "https://randomuser.me/api/portraits/med/men/3.jpg",
    //       commentContent:
    //         "Accept my beautiful religion Islam you will find peace Sukoon❤️❤️",
    //       commentAuthor: "Nathan Wood",
    //     },
    //     {
    //       commentAuthor: "Signe Thomsen",
    //       commentContent: "let`s Go Cristiano SIUUUUUUUUUUU",
    //       commentImgUrl:
    //         "https://randomuser.me/api/portraits/med/women/53.jpg",
    //     },
    //     {
    //       commentContent: "Mio do mundoooo",
    //       commentImgUrl:
    //         "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2Fhamzaskyn%2Fcamus.jpg?alt=media&token=338e9109-228b-424e-a8ca-1affd22053c5",
    //       commentAuthor: "hamzaskyn",
    //     },
    //   ],
    // },

    console.log(profile);

    // updateDoc(docRef, {
    //   profilePosts: [profile.profilePosts],
    // });
  };

  return (
    <div className="flex h-screen w-screen dark:bg-hardDark dark:text-white">
      <Sidebar
        isDarkModeActive={isDarkModeActive}
        setIsDarkModeActive={setIsDarkModeActive}
        userInfo={userInfo}
        setActiveProfile={setActiveProfile}
        isSearchActive={isSearchActive}
        setIsSearchActive={setIsSearchActive}
        fetchSearchProfile={fetchSearchProfile}
      />

      {/* Profile Section */}
      <section className="ml-[240px] flex flex-grow flex-col items-center gap-2">
        {profile && <ProfileHead profile={profile} />}
        <button
          onClick={() => {
            fetchProfilePosts();
          }}
        >
          Fetch My Posts Baby !{" "}
        </button>
        <button
          onClick={() => {
            updateProfilePosts();
          }}
        >
          Update my profile posts baby
        </button>

        {profile && (
          <ProfilePosts posts={profile.profilePosts} profile={profile} />
        )}

        <ProfileFooter />
      </section>
    </div>
  );
};

export default ProfilePage;
