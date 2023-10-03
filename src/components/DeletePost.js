import { useState } from "react";
import { useFirestore } from "../hooks/useFirestore";

// components
import Overlay from "./Overlay";

const DeletePost = ({ setDeletePost, post_id }) => {
  const { deleteDocument } = useFirestore("profiles_posts");
  const [confirmDeletePost, setConfirmDeletePost] = useState(false);

  const deletePostDb = () => {
    deleteDocument(post_id);
  };

  return (
    <>
      <Overlay z_index={"z-20"} />
      {/* Delete Post Section */}
      <div />

      {!confirmDeletePost && (
        <div className="fixed top-[50%] left-[50%] z-50  flex w-[300px] -translate-x-1/2  -translate-y-1/2 flex-col items-center justify-center rounded-lg bg-white sm:w-[384px]">
          <button
            className="flex h-[40px] w-full cursor-pointer items-center justify-center p-1 text-sm font-bold text-[#ED4956] active:bg-instGrayish"
            onClick={() => {
              setConfirmDeletePost(true);
            }}
          >
            {" "}
            Delete{" "}
          </button>
          <button
            className="flex h-[40px] w-full cursor-pointer  items-center justify-center border-t-[1px] border-instGrayish p-2 text-sm active:bg-instGrayish"
            onClick={() => setDeletePost(false)}
          >
            {" "}
            Cancel
          </button>
        </div>
      )}

      {confirmDeletePost && (
        <div className="fixed top-[50%] left-[50%] z-50 flex w-[300px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-lg bg-white sm:w-[384px]">
          <div className="m-8 flex  flex-col items-center justify-center gap-2 ">
            <span className="text-xl"> Delete Post ?</span>
            <p className="text-sm text-[#737373]">
              {" "}
              Are you sure you want to delete this post ?
            </p>
          </div>
          <button
            className="flex h-[56px] w-full cursor-pointer  items-center justify-center border-t-[1px] border-instGrayish p-2 text-sm font-bold text-[#ED4956] active:bg-instGrayish"
            onClick={deletePostDb}
          >
            {" "}
            Delete{" "}
          </button>
          <button
            className="flex h-[56px] w-full cursor-pointer  items-center justify-center border-t-[1px] border-instGrayish p-2 text-sm active:bg-instGrayish"
            onClick={() => setDeletePost(false)}
          >
            {" "}
            Cancel
          </button>
        </div>
      )}
    </>
  );
};

export default DeletePost;
