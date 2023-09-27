import { useState } from "react";
import Overlay from "./Overlay";
import { useFirestore } from "../hooks/useFirestore";

const DeletePost = ({ setDeletePost, post_id }) => {
  const { deleteDocument } = useFirestore("profiles_posts");
  const [confirmDeletePost, setConfirmDeletePost] = useState(false);

  const deletePostDb = () => {
    deleteDocument(post_id);
  };

  return (
    <div>
      <Overlay z_index={"z-20"} />
      {/* Delete Post Section */}
      <div
        className={`fixed left-[55%] top-[50%] z-20 -translate-x-1/2 -translate-y-1/2  bg-black/50`}
      />

      <div className="absolute top-[40%] left-[40%] z-50  flex w-[384px] flex-col items-center justify-center rounded-lg bg-white">
        <h2
          className="flex h-[40px] w-full cursor-pointer items-center justify-center p-1 text-sm font-bold text-[#ED4956] active:bg-instGrayish"
          onClick={() => {
            setConfirmDeletePost(true);
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

      {confirmDeletePost && (
        <div className="absolute top-[35%] left-[40%] z-50 flex w-[384px] flex-col items-center justify-center rounded-lg bg-white">
          <h2 className="m-8 flex  flex-col items-center justify-center gap-2 ">
            <p className="text-xl"> Delete Post ?</p>
            <p className="text-sm text-[#737373]">
              {" "}
              Are you sure you want to delete this post ?
            </p>
          </h2>
          <h2
            className="flex h-[56px] w-full cursor-pointer  items-center justify-center border-t-[1px] border-instGrayish p-2 text-sm font-bold text-[#ED4956] active:bg-instGrayish"
            onClick={deletePostDb}
          >
            {" "}
            Delete{" "}
          </h2>
          <h2
            className="flex h-[56px] w-full cursor-pointer  items-center justify-center border-t-[1px] border-instGrayish p-2 text-sm active:bg-instGrayish"
            onClick={() => setDeletePost(false)}
          >
            {" "}
            Cancel
          </h2>
        </div>
      )}
    </div>
  );
};

export default DeletePost;
