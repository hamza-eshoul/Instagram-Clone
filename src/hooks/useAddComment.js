import { useAuthContext } from "./useAuthContext";
import { useFirestore } from "./useFirestore";
import defaultProfile from "../assets/images/defaultProfile.png";

export const useAddComment = () => {
  const { user } = useAuthContext();
  const { updateDocument } = useFirestore("profiles_posts");

  const addCommentDb = (comments, commentContent, post_id) => {
    const updatedPostComments = [
      ...comments,
      {
        commentAuthor: user.displayName,
        commentContent: commentContent,
        commentImgUrl: user.photoURL ? user.photoURL : defaultProfile,
      },
    ];

    console.log(updatedPostComments);

    updateDocument(post_id, {
      postComments: updatedPostComments,
    });
  };

  return { addCommentDb };
};
