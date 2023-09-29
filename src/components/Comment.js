import { useDocument } from "../hooks/useDocument";

// images
import defaultProfile from "../assets/images/defaultProfile.png";

const Comment = ({ commentAuthor, commentContent, commentImgUrl }) => {
  const { document: commentAuthorProfile } = useDocument(
    "profiles",
    commentAuthor
  );

  if (commentImgUrl) {
    return (
      <article className="flex gap-3.5 px-4 py-2">
        <img
          src={commentImgUrl}
          className="h-8 w-8 rounded-full"
          alt="comment author"
        />

        <p className="text-justify text-sm">
          {" "}
          <span className="font-semibold">{commentAuthor}</span>{" "}
          {commentContent}
        </p>
      </article>
    );
  }

  return (
    <article className="flex gap-3.5 px-4 py-2">
      {commentAuthorProfile && (
        <img
          src={
            commentAuthorProfile.profileImgUrl
              ? commentAuthorProfile.profileImgUrl
              : defaultProfile
          }
          className="h-8 w-8 rounded-full"
          alt="comment author"
        />
      )}

      <p className="text-justify text-sm">
        {" "}
        <span className="font-semibold">{commentAuthor}</span> {commentContent}
      </p>
    </article>
  );
};

export default Comment;
