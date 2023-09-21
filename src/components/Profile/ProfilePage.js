import React, { useEffect, useState } from "react";
import Sidebar from "../Main/Sidebar";
import ProfileHead from "./ProfileHead";
import ProfilePosts from "./ProfilePosts";
import { db } from "../../Firebase";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import PostFullSize from "./PostFullSize";
import ProfileFooter from "./ProfileFooter";

const ProfilePage = ({
  activeProfile,
  setActiveProfile,
  isDarkModeActive,
  setIsDarkModeActive,
  userInfo,
  isSearchActive,
  setIsSearchActive,
  fetchSearchProfile,
  setFetchSearchProfile,
}) => {
  useEffect(() => {
    setFetchSearchProfile(true);
  }, []);

  // Profile State
  const [profileName, setProfileName] = useState("");
  const [profileImgUrl, setProfileImgUrl] = useState("");
  const [profileFollowersNbr, setProfileFollowersNbr] = useState("");
  const [profileFollowingNbr, setProfileFollowingNbr] = useState("");

  // Posts State
  const [isPostFullSize, setIsPostFullSize] = useState(false);
  const [posts, setPosts] = useState([]);
  const [postImg, setPostImg] = useState("");
  const [postCaption, setPostCaption] = useState("");
  const [postLikes, setPostLikes] = useState("");
  const [postTime, setPostTime] = useState("");
  const [nbrComments, setNbrComments] = useState("");
  const [postComments, setPostComments] = useState([]);
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [postId, setPostId] = useState("");

  useEffect(() => {
    fetchProfile(activeProfile);
  }, [posts]);

  const fetchProfile = (profile) => {
    const profileRef = doc(db, "profiles", `${profile}`);
    getDoc(profileRef).then((profile) => {
      setProfileName(profile.data().profileName);
      setProfileImgUrl(profile.data().profileImgUrl);
      setProfileFollowersNbr(profile.data().nbrFollowers);
      setProfileFollowingNbr(profile.data().nbrFollowing);
    });

    if (posts.length > 0) {
      return;
    } else {
      const postsRef = collection(db, "profiles", `${profile}`, "profilePosts");

      getDocs(postsRef).then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          if (!doc.data().postComments) {
            setPosts((prevPosts) => [
              ...prevPosts,
              {
                postImgUrl: doc.data().postImgUrl,
                postCaption: doc.data().postCaption,
                postLikes: doc.data().postLikes,
                postTime: doc.data().postTime,
                nbrComments: doc.data().nbrComments,
                isPostLiked: doc.data().isPostLiked,
                postId: doc.id,
              },
            ]);
          } else {
            setPosts((prevPosts) => [
              ...prevPosts,
              {
                postImgUrl: doc.data().postImgUrl,
                postCaption: doc.data().postCaption,
                postLikes: doc.data().postLikes,
                postTime: doc.data().postTime,
                nbrComments: doc.data().nbrComments,
                isPostLiked: doc.data().isPostLiked,
                postId: doc.id,
                postComments: [
                  {
                    commentContent:
                      doc.data().postComments.comment1.commentContent,
                    commentImgUrl:
                      doc.data().postComments.comment1.commentImgUrl,
                    commentName: doc.data().postComments.comment1.commentName,
                  },
                  {
                    commentContent:
                      doc.data().postComments.comment2.commentContent,
                    commentImgUrl:
                      doc.data().postComments.comment2.commentImgUrl,
                    commentName: doc.data().postComments.comment2.commentName,
                  },
                  {
                    commentContent:
                      doc.data().postComments.comment3.commentContent,
                    commentImgUrl:
                      doc.data().postComments.comment3.commentImgUrl,
                    commentName: doc.data().postComments.comment3.commentName,
                  },
                  {
                    commentContent:
                      doc.data().postComments.comment4.commentContent,
                    commentImgUrl:
                      doc.data().postComments.comment4.commentImgUrl,
                    commentName: doc.data().postComments.comment4.commentName,
                  },
                ],
              },
            ]);
          }
        });
      });
    }
  };

  const openPost = (
    img,
    caption,
    comments,
    likes,
    time,
    nbrComments,
    isPostLiked,
    postId
  ) => {
    setIsPostFullSize(true);
    setPostImg(img);
    setPostCaption(caption);
    if (comments) {
      setPostComments(comments);
    }

    setPostLikes(likes);
    setPostTime(time);
    setNbrComments(nbrComments);
    setIsPostLiked(isPostLiked);
    setPostId(postId);
  };

  const closePost = () => {
    setIsPostFullSize(false);
  };

  const updateLikes = (type, profilename, postId) => {
    const likesRef = doc(
      db,
      "profiles",
      `${profilename}`,
      "profilePosts",
      `${postId}`
    );

    getDoc(likesRef).then((postLike) => {
      let likesVal = postLike.data().postLikes;

      if (type == "increment") {
        ++likesVal;
        updateDoc(likesRef, {
          postLikes: likesVal,
          isPostLiked: true,
        });
      } else if (type == "decrement") {
        --likesVal;
        updateDoc(likesRef, {
          postLikes: likesVal,
          isPostLiked: false,
        });
      }

      getDoc(likesRef).then((newPostLike) => {
        setPostLikes(newPostLike.data().postLikes);
      });
    });
  };

  return (
    <div className="flex h-screen w-screen dark:bg-hardDark dark:text-white">
      {/* Overlay */}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 z-10 ${
          isPostFullSize ? "" : "hidden"
        } bg-black/70`}
      />
      <Sidebar
        isDarkModeActive={isDarkModeActive}
        setIsDarkModeActive={setIsDarkModeActive}
        userInfo={userInfo}
        setActiveProfile={setActiveProfile}
        isSearchActive={isSearchActive}
        setIsSearchActive={setIsSearchActive}
        fetchSearchProfile={fetchSearchProfile}
        setPosts={setPosts}
      />
      <PostFullSize
        isPostFullSize={isPostFullSize}
        postImg={postImg}
        postCaption={postCaption}
        postComments={postComments}
        postLikes={postLikes}
        postTime={postTime}
        nbrComments={nbrComments}
        profileImg={profileImgUrl}
        profileName={profileName}
        closePost={closePost}
        isDarkModeActive={isDarkModeActive}
        updateLikes={updateLikes}
        isPostLiked={isPostLiked}
        setIsPostLiked={setIsPostLiked}
        postId={postId}
        userInfo={userInfo}
        setPosts={setPosts}
      />
      {/* Profile Section */}
      <section className="ml-[240px] flex flex-grow flex-col items-center gap-2">
        <ProfileHead
          profileName={profileName}
          profileImg={profileImgUrl}
          profileFollowersNbr={profileFollowersNbr}
          profileFollowingNbr={profileFollowingNbr}
          posts={posts}
        />
        <ProfilePosts openPost={openPost} posts={posts} />
        <ProfileFooter />
      </section>
    </div>
  );
};

export default ProfilePage;
