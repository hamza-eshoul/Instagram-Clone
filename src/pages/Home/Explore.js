import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import PostCard from "../Profile/PostCard";
import { Link } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { v4 as uuidv4 } from "uuid";

const Explore = ({ setActiveProfile }) => {
  useEffect(() => {
    fetchAllPosts();
  }, []);

  const [exploreCardsArr, setExploreCardsArr] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllPosts = () => {
    const profileRef = collection(db, "profiles");

    if (exploreCardsArr.length > 0) {
      return;
    } else {
      getDocs(profileRef).then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          const postRef = collection(
            db,
            "profiles",
            `${doc.id}`,
            "profilePosts"
          );
          getDocs(postRef).then((snapshot) => {
            setLoading(false);
            snapshot.docs.forEach((post) => {
              setExploreCardsArr((prevCards) => [
                ...prevCards,
                [post.data(), doc.id],
              ]);
            });
          });
        });
      });
    }
  };

  return (
    <div
      className={`ml-[243px] flex grow justify-center bg-[#FAFAFA] dark:bg-hardDark`}
    >
      <div>
        <div
          className={`${
            loading ? "absolute" : "hidden"
          } top-[40%] left-1/2 h-screen w-screen`}
        >
          <MoonLoader
            color={"grey"}
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>

        <div
          className={`${
            loading ? "hidden" : "flex"
          } w-[960px] flex-wrap gap-8 pt-9`}
        >
          {exploreCardsArr.map((exploreCard) => (
            <Link to="/profile">
              <PostCard
                postImg={exploreCard[0].postImgUrl}
                postCaption={exploreCard[0].postCaption}
                postLikes={exploreCard[0].postLikes}
                postTime={exploreCard[0].postTime}
                nbrComments={exploreCard[0].nbrComments}
                openPost={() => {
                  setActiveProfile(exploreCard[1]);
                }}
                key={uuidv4()}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
