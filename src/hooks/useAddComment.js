import { useAuthContext } from "./useAuthContext";
import { useFirestore } from "./useFirestore";

export const useAddComment = () => {
  const { user } = useAuthContext();
  const { updateDocument } = useFirestore("profiles_posts");

  const addCommentDb = (comments, commentContent, post_id) => {
    const updatedPostComments = [
      ...comments,
      {
        commentAuthor: user.displayName,
        commentContent: commentContent,
      },
    ];

    updateDocument(post_id, {
      postComments: updatedPostComments,
    });
  };

  return { addCommentDb };
};
