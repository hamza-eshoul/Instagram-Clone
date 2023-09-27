import { useEffect, useState } from "react";

export const useUpdateLikes = (likes) => {
  const [isPostLike, setIsPostLike] = useState(false);
  const [likeNbr, setLikeNbr] = useState(null);

  useEffect(() => {
    if (likes) {
      setLikeNbr(likes);
    }

    if (!likes) {
      setLikeNbr(0);
    }
  }, [likes]);

  const updateLikes = () => {
    setIsPostLike(!isPostLike);

    setLikeNbr((prevLikes) => {
      if (isPostLike) {
        return prevLikes - 1;
      }
      if (!isPostLike) {
        return prevLikes + 1;
      }
    });
  };

  return { isPostLike, likeNbr, updateLikes };
};
