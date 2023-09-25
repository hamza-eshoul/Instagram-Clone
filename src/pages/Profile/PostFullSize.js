import { BsThreeDots } from "react-icons/bs";
import Comment from "./Comment";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useRef, useState } from "react";
import { FcLike } from "react-icons/fc";
import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { RingLoader } from "react-spinners";
import { v4 as uuidv4 } from "uuid";
import Overlay from "../../components/Overlay";
import { useFirestore } from "../../hooks/useFirestore";
import { useAuthContext } from "../../hooks/useAuthContext";

const PostFullSize = ({ post, profile, setPostFullSize }) => {
  const [deletePost, setDeletePost] = useState(false);
  const [confirmDeletePost, setConfirmDeletePost] = useState(false);
  const [isPostBeingDeleted, setIsPostBeingDeleted] = useState(false);
  const [nonDeleteProfile, setNonDeleteProfile] = useState(false);
  const [addCommentContent, setAddCommentContent] = useState("");
  const { updateDocument } = useFirestore("profiles");
  const { user } = useAuthContext();

  const ref = useRef(null);

  // const testCommentDb = () => {
  //   console.log(post);
  //   // console.log(...profile.profilePosts[0].postComments);
  // };

  // const addCommentDb = () => {
  //   updateDocument(profile.profileName, {
  //     profilePosts: [
  //       ...post,
  //       postComments: [
  //         ...post.postComments,
  //         {
  //           commentAuthor: user.displayName,
  //           commentContent: addCommentContent,
  //           commentImgUrl: user.photoURL,
  //         },
  //       ],
  //     ],
  //   });
  // };

  // useEffect(() => {
  //   updateAddedComment();
  //   return () => {
  //     setAddedComments({});
  //   };
  // }, [postImg]);

  // const deletePostDb = () => {
  //   setConfirmDeletePost(false);
  //   setIsPostBeingDeleted(true);

  //   const postRef = doc(
  //     db,
  //     "profiles",
  //     userInfo.displayName,
  //     "profilePosts",
  //     postId
  //   );

  //   deleteDoc(postRef).then(() => {
  //     setPosts([]);
  //     setIsPostBeingDeleted(false);
  //     closePost();
  //   });
  // };

  // const addCommentDb = () => {
  //   const postRef = doc(
  //     db,
  //     "profiles",
  //     `${profileName}`,
  //     "profilePosts",
  //     `${postId}`
  //   );

  //   const updatedComments = {};

  //   updatedComments[`addedPostComments.${uuidv4()}`] = {
  //     commentContent: addedCommentText,
  //     commentImgUrl: userInfo.photoURL,
  //     commentName: userInfo.displayName,
  //   };

  //   updateDoc(postRef, updatedComments);

  //   setAddedCommentText("");
  // };

  // const updateAddedComment = () => {
  //   const postRef = doc(
  //     db,
  //     "profiles",
  //     `${profileName}`,
  //     "profilePosts",
  //     `${postId}`
  //   );

  //   getDoc(postRef).then((post) => {
  //     if (post.data().addedPostComments) {
  //       setAddedComments(post.data().addedPostComments);
  //     }
  //   });
  // };

  return (
    <div>
      <Overlay />

      {/* Delete Post Section */}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 z-20 ${
          deletePost ||
          confirmDeletePost ||
          isPostBeingDeleted ||
          nonDeleteProfile
            ? ""
            : "hidden"
        } bg-black/50`}
      />
      <div
        className={`${
          deletePost ? "absolute" : "hidden"
        } top-[40%] left-[40%] z-50  flex w-[384px] flex-col items-center justify-center rounded-lg bg-white`}
      >
        <h2
          className="flex h-[40px] w-full cursor-pointer items-center justify-center p-1 text-sm font-bold text-[#ED4956] active:bg-instGrayish"
          onClick={() => {
            // setDeletePost(false);
            // setConfirmDeletePost(true);
          }}
        >
          {" "}
          Delete{" "}
        </h2>
        <h2
          className="flex h-[40px] w-full cursor-pointer  items-center justify-center border-t-[1px] border-instGrayish p-2 text-sm active:bg-instGrayish"
          onClick={() => setDeletePost(false)}
        >
          {" "}
          Cancel
        </h2>
      </div>
      {/* Popup for non-delete profiles */}
      <div
        className={`${
          nonDeleteProfile ? "absolute" : "hidden"
        } top-[40%] left-[40%] z-50  flex w-[384px] flex-col items-center justify-center rounded-lg bg-white`}
      >
        <h2
          className="flex h-[40px] w-full cursor-pointer  items-center justify-center border-t-[1px] border-instGrayish p-2 text-sm active:bg-instGrayish"
          onClick={() => setNonDeleteProfile(false)}
        >
          {" "}
          Cancel
        </h2>
      </div>
      <div
        className={`${
          confirmDeletePost ? "absolute" : "hidden"
        }  top-[35%] left-[40%] z-50 flex w-[384px] flex-col items-center justify-center rounded-lg bg-white`}
      >
        <h2 className="m-8 flex  flex-col items-center justify-center gap-2 ">
          <p className="text-xl"> Delete Post ?</p>
          <p className="text-sm text-[#737373]">
            {" "}
            Are you sure you want to delete this post ?
          </p>
        </h2>
        <h2
          className="flex h-[56px] w-full cursor-pointer  items-center justify-center border-t-[1px] border-instGrayish p-2 text-sm font-bold text-[#ED4956] active:bg-instGrayish"
          // onClick={deletePostDb}
        >
          {" "}
          Delete{" "}
        </h2>
        <h2
          className="flex h-[56px] w-full cursor-pointer  items-center justify-center border-t-[1px] border-instGrayish p-2 text-sm active:bg-instGrayish"
          onClick={() => setConfirmDeletePost(false)}
        >
          {" "}
          Cancel
        </h2>
      </div>
      <div
        className={`${
          isPostBeingDeleted ? "absolute" : "hidden"
        } top-[40%] left-[50%] z-50  flex h-[50px] w-[140px] flex-col items-center justify-center rounded-lg bg-white`}
      >
        <RingLoader
          color={"blue"}
          loading={true}
          size={40}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      <RxCross2
        className="absolute
         top-6 left-[1680px] z-10 cursor-pointer text-3xl text-white"
        onClick={() => setPostFullSize(false)}
      />
      <div className="absolute left-64 top-10 z-10 flex h-[900px] rounded-xl bg-black">
        {/* Post Left Part */}
        <div className="h-full w-[750px]">
          <img
            src={post.postImgUrl}
            className="h-full w-full object-fill py-20"
          />
        </div>
        {/* Post Right Part */}
        <div className="h-full w-[550px] rounded-r-xl bg-white text-black dark:bg-hardDark dark:text-white">
          {/* Info section */}
          <div className="flex items-center justify-between border-b-[1px] border-instGrayish border-opacity-50 px-4 py-3.5">
            <div className="flex items-center gap-3.5">
              <div className="h-[32px] w-[32px]">
                <img src={profile.profileImgUrl} className="rounded-full" />
              </div>
              <p className=" text-sm font-semibold">
                {" "}
                {profile.profileName}
                <span className="pl-2">•</span>
              </p>

              <p className="text-sm font-semibold text-lightBlue"> Follow</p>
            </div>

            <BsThreeDots
              className="cardItemsHover text-xl"
              // onClick={() => {
              //   if (profileName === userInfo.displayName) {
              //     setDeletePost(true);
              //   } else {
              //     setNonDeleteProfile(true);
              //   }
              // }}
            />
          </div>
          {/* Caption section  */}
          <div className="flex gap-3.5 px-4 py-3.5">
            <div className="h-[32px] w-[32px]">
              <img
                src={profile.profileImgUrl}
                className="h-full w-full rounded-full"
              />
            </div>

            <div className="flex w-[480px] flex-col gap-1 ">
              <p className="text-justify text-sm">
                {" "}
                <span className="font-semibold">
                  {profile.profileName}
                </span>{" "}
                {post.postCaption}
              </p>
              <p className="text-xs opacity-50"> </p>
            </div>
          </div>
          {/* Comments section */}
          <div className="h-[620px] border-b-[1px] border-instGrayish border-opacity-50">
            {post.postComments &&
              post.postComments.map((comment) => (
                <Comment
                  key={uuidv4()}
                  commentAuthor={comment.commentAuthor}
                  commentContent={comment.commentContent}
                  commentImgUrl={comment.commentImgUrl}
                />
              ))}
          </div>
          {/* Add a comment section */}
          <div className="flex flex-col gap-4">
            {/* Functionality Icons */}
            <div className="flex justify-between px-4 pt-3">
              <div className="flex cursor-pointer items-center justify-center gap-4">
                <FcLike
                  className={`${post.isPostLiked ? "text-[28px]" : "hidden"}`}
                  // onClick={() => {
                  //   updateLikes("decrement", profileName, postId);
                  //   setIsPostLiked(false);
                  // }}
                />
                <svg
                  aria-label="Like"
                  class="x1lliihq x1n2onr6"
                  color="rgb(0, 0, 0)"
                  fill="rgb(0, 0, 0)"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                  className={`${post.isPostLiked ? "hidden" : ""}`}
                  onClick={() => {
                    // updateLikes("increment", profileName, postId);
                    // setIsPostLiked(true);
                  }}
                >
                  <title>Like</title>
                  <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                </svg>

                {/* Comment Icon */}
                <div onClick={() => ref.current.focus()}>
                  <svg
                    aria-label="Comment"
                    class="x1lliihq x1n2onr6"
                    color="rgb(0, 0, 0)"
                    fill="rgb(0, 0, 0)"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>Comment</title>
                    <path
                      d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                  </svg>
                </div>

                <svg
                  aria-label="Share Post"
                  class="x1lliihq x1n2onr6"
                  color="rgb(0, 0, 0)"
                  fill="rgb(0, 0, 0)"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>Share Post</title>
                  <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="22"
                    x2="9.218"
                    y1="3"
                    y2="10.083"
                  ></line>
                  <polygon
                    fill="none"
                    points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></polygon>
                </svg>
              </div>

              <svg
                aria-label="Save"
                class="x1lliihq x1n2onr6"
                color="rgb(0, 0, 0)"
                fill="rgb(0, 0, 0)"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Save</title>
                <polygon
                  fill="none"
                  points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></polygon>
              </svg>
            </div>
            <div className="flex flex-col px-4">
              <p className="text-[14px] font-semibold">
                {" "}
                {post.postLikes} likes{" "}
              </p>
              <p className="text-[10px] opacity-50">
                {" "}
                {post.postTime.toUpperCase()} AGO{" "}
              </p>
            </div>

            {/* Add a comment */}
            <div className="border-t-[0.5px] border-instGrayish px-3 pt-3">
              <div className="flex h-[20px] justify-between">
                <textarea
                  type="text"
                  placeholder="Add a comment..."
                  className="grow resize-none text-[14px] outline-none placeholder:text-[#8E8E8E] dark:bg-hardDark"
                  value={addCommentContent}
                  onChange={(e) => {
                    setAddCommentContent(e.target.value);
                  }}
                  ref={ref}
                />
                <p
                  className={`${
                    addCommentContent === ""
                      ? "pointer-events-none opacity-40"
                      : "cursor-pointer opacity-100"
                  }  text-[14px]  font-semibold text-[#0095F6] dark:text-[#b3dbff] dark:opacity-100`}
                  onClick={() => {
                    // addCommentDb();
                    // updateAddedComment();
                  }}
                >
                  {" "}
                  Post{" "}
                </p>
              </div>
            </div>
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default PostFullSize;
