import React, { useEffect, useState } from "react";
import { db } from "../../Firebase";
import { collection, getDocs } from "firebase/firestore";
import SearchQuery from "./SearchQuery";
import { v4 as uuidv4 } from "uuid";

const Search = ({
  setActiveProfile,
  isSearchActive,
  setIsSearchActive,
  fetchSearchProfile,
  setPosts,
}) => {
  const [queryText, setQueryText] = useState("");
  const [profileArray, setProfileArray] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    setFilteredArray(
      profileArray.filter((profile) =>
        profile.profileName.toUpperCase().includes(queryText.toUpperCase())
      )
    );
  }, [queryText]);

  useEffect(() => {
    const profilesRef = collection(db, "profiles");

    getDocs(profilesRef).then((snapshot) => {
      let searchArr = [];
      snapshot.docs.forEach((doc) => {
        searchArr.push({ ...doc.data(), id: doc.id });
      });
      setProfileArray(searchArr);
    });
  }, []);

  return (
    <div
      className={`${
        isSearchActive ? "absolute" : "hidden"
      } z-40 ml-16 flex h-[1008px] w-[400px] flex-col gap-3 rounded-tr-xl rounded-br-xl border-l-[1px] border-instGrayish bg-white drop-shadow dark:border-lightDark dark:bg-hardDark`}
    >
      <h1 className="pl-[18px] pt-6 text-2xl font-semibold"> Search </h1>
      {/* Search Bar */}
      <div className="px-4">
        <input
          type="search"
          className="h-[40px] w-[364px] translate-y-7 rounded-lg bg-[#EFEFEF] py-[3px] px-4 text-base text-black outline-none dark:bg-lightDark dark:text-white"
          placeholder="Search"
          onChange={(e) => {
            setQueryText(e.target.value);
          }}
        />
      </div>

      {/* Recent Searches */}
      <div
        className={`${
          queryText == "" ? "" : "hidden"
        } w-full translate-y-10 border-t-[1px] border-instGrayish dark:border-lightDark`}
      >
        <p className="px-5 py-4 font-semibold"> Recent </p>
        <div className="flex flex-col">
          <SearchQuery
            searchName={"hamzaskyn"}
            searchId={"hamzaskyn"}
            searchFullName={"hamzaskyn"}
            searchImg={
              "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2Fhamzaskyn%2Fcamus.jpg?alt=media&token=338e9109-228b-424e-a8ca-1affd22053c5"
            }
            setActiveProfile={setActiveProfile}
            setIsSearchActive={setIsSearchActive}
            fetchSearchProfile={fetchSearchProfile}
            setPosts={setPosts}
          />
          <SearchQuery
            searchName={"the odin project"}
            searchId={"theodinproject"}
            searchFullName={"The Odin Project"}
            searchImg={
              "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2Ftheodinproject.jpg?alt=media&token=54cae2b0-0757-45e4-850f-7146fa5926a9"
            }
            setActiveProfile={setActiveProfile}
            setIsSearchActive={setIsSearchActive}
            fetchSearchProfile={fetchSearchProfile}
            setPosts={setPosts}
          />
          <SearchQuery
            searchName={"traversy media"}
            searchId={"traversymedia"}
            searchFullName={"Brad Traversy Media"}
            searchImg={
              "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2Ftraversymedia.jpg?alt=media&token=62c24e11-22b3-4606-b323-f43050a29e22"
            }
            setActiveProfile={setActiveProfile}
            setIsSearchActive={setIsSearchActive}
            fetchSearchProfile={fetchSearchProfile}
            setPosts={setPosts}
          />
          <SearchQuery
            searchName={"ozark"}
            searchId={"ozark"}
            searchFullName={"ozark"}
            searchImg={
              "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2Fozark.jpg?alt=media&token=2bbef0c8-f820-4a9f-959e-237b0be75ecc"
            }
            setActiveProfile={setActiveProfile}
            setIsSearchActive={setIsSearchActive}
            fetchSearchProfile={fetchSearchProfile}
            setPosts={setPosts}
          />
          <SearchQuery
            searchName={"Alice kumar"}
            searchId={"AliceKumar"}
            searchFullName={"Alice Kumar"}
            searchImg={"https://randomuser.me/api/portraits/med/women/30.jpg"}
            setActiveProfile={setActiveProfile}
            setIsSearchActive={setIsSearchActive}
            fetchSearchProfile={fetchSearchProfile}
            setPosts={setPosts}
          />
          <SearchQuery
            searchName={"achraf hakimi"}
            searchId={"achrafhakimi"}
            searchFullName={"Achraf Hakimi"}
            searchImg={
              "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2Fachrafhakimi.jpg?alt=media&token=eb2e451e-ed2a-431e-a5dd-0a1734201162"
            }
            setActiveProfile={setActiveProfile}
            setIsSearchActive={setIsSearchActive}
            fetchSearchProfile={fetchSearchProfile}
            setPosts={setPosts}
          />
        </div>
      </div>

      {/* Search Queries  */}
      <div
        className={`${
          queryText !== "" ? "" : "hidden"
        } w-full translate-y-10 border-t-[1px] border-instGrayish dark:border-lightDark`}
      >
        <div className="flex max-h-[850px] flex-col overflow-auto">
          {filteredArray.map((searchProfile) => {
            return (
              <SearchQuery
                searchName={searchProfile.profileName}
                searchFullName={searchProfile.profileName}
                searchImg={searchProfile.profileImgUrl}
                setActiveProfile={setActiveProfile}
                setIsSearchActive={setIsSearchActive}
                searchId={searchProfile.id}
                fetchSearchProfile={fetchSearchProfile}
                setPosts={setPosts}
                key={uuidv4()}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
