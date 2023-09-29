import { useEffect, useState } from "react";
import { useCollection } from "../hooks/useCollection";

// components
import SearchQuery from "./SearchQuery";

const recentSearchList = [
  {
    searchId: "theodinproject",
    searchName: "the odin project",
    searchFullName: "The Odn Project",
    searchImg:
      "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2Ftheodinproject.jpg?alt=media&token=54cae2b0-0757-45e4-850f-7146fa5926a9",
  },
  {
    searchId: "traversymedia",
    searchName: "traversy media",
    searchFullName: "Brad Traversy Media",
    searchImg:
      "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2Ftraversymedia.jpg?alt=media&token=62c24e11-22b3-4606-b323-f43050a29e22",
  },
  {
    searchId: "ozark",
    searchName: "ozark",
    searchFullName: "ozark",
    searchImg:
      "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2Fozark.jpg?alt=media&token=2bbef0c8-f820-4a9f-959e-237b0be75ecc",
  },
  {
    searchId: "AliceKumar",
    searchName: "Alice kumar",
    searchFullName: "Alice Kumar",
    searchImg: "https://randomuser.me/api/portraits/med/women/30.jpg",
  },
  {
    searchId: "achrafhakimi",
    searchName: "achraf hakimi",
    searchFullName: "Achraf Hakimi",
    searchImg:
      "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2Fachrafhakimi.jpg?alt=media&token=eb2e451e-ed2a-431e-a5dd-0a1734201162",
  },
];

const Search = ({ setIsSearchActive }) => {
  const [queryText, setQueryText] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);
  const { documents: profiles } = useCollection("profiles");

  useEffect(() => {
    if (profiles) {
      setFilteredArray(
        profiles.filter((profile) =>
          profile.profileName.toUpperCase().includes(queryText.toUpperCase())
        )
      );
    }
  }, [queryText, profiles]);

  return (
    <section className="fixed top-[-4px] z-40 ml-[50px] hidden h-screen w-[364px] flex-col gap-3 rounded-tr-xl rounded-br-xl border-l-[1px] border-instGrayish bg-white shadow-lg  md:flex">
      <span className="pl-[18px] pt-6 text-2xl font-semibold"> Search </span>
      {/* Search Bar */}

      <input
        type="search"
        className="mx-4 h-[40px] translate-y-7 rounded-lg bg-[#EFEFEF] py-[3px] px-4 text-base text-black outline-none"
        placeholder="Search"
        value={queryText}
        onChange={(e) => {
          setQueryText(e.target.value);
        }}
      />

      {/* Recent Searches */}
      {queryText === "" && (
        <div className="translate-y-10 border-t-[1px] border-instGrayish">
          <p className="px-5 py-4 font-semibold"> Recent </p>

          <ul>
            {recentSearchList.map((search) => (
              <SearchQuery
                key={search.searchId}
                searchId={search.searchId}
                searchName={search.searchName}
                searchFullName={search.searchFullName}
                searchImg={search.searchImg}
                setIsSearchActive={setIsSearchActive}
              />
            ))}
          </ul>
        </div>
      )}

      {/* Search Queries  */}
      {queryText !== "" && (
        <ul className="flex max-h-[850px] translate-y-10 flex-col overflow-auto border-t-[1px] border-instGrayish">
          {filteredArray.map((searchProfile) => (
            <SearchQuery
              key={searchProfile.id}
              searchName={searchProfile.profileName}
              searchFullName={searchProfile.profileName}
              searchImg={searchProfile.profileImgUrl}
              setIsSearchActive={setIsSearchActive}
              searchId={searchProfile.id}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default Search;
