import React from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

const SearchQuery = ({
  searchImg,
  searchName,
  searchFullName,
  searchId,
  setActiveProfile,
  setIsSearchActive,
  fetchSearchProfile,
  setPosts,
}) => {
  return (
    <Link
      to="/profile"
      onClick={() => {
        if (fetchSearchProfile) {
          setPosts([]);
          setActiveProfile(searchId);
          setIsSearchActive(false);
        } else {
          setActiveProfile(searchId);
          setIsSearchActive(false);
        }
      }}
    >
      <div className="flex items-center justify-between px-2 pr-5 hover:bg-instGrayish hover:bg-opacity-20">
        <div className="flex h-[70px] cursor-pointer items-center gap-2">
          {/* Profile Img */}
          <div className="w-18 h-11 pl-6">
            <img
              src={searchImg}
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          {/* Profile Info */}
          <div className="flex flex-col py-1">
            <p className="text-sm font-semibold"> {searchName} </p>
            <p className="text-sm text-[#737373]"> {searchFullName} </p>
          </div>
        </div>{" "}
        <BiSearchAlt className="text-2xl" />
      </div>
    </Link>
  );
};

export default SearchQuery;
