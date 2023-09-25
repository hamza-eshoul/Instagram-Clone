import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const ProfileFooter = () => {
  return (
    <div className="fixed bottom-2 flex flex-col items-center gap-5 dark:bg-hardDark">
      {/* Links */}
      <div className="flex gap-4">
        <a
          href="https://about.meta.com/"
          target="_blank"
          className="cursor-pointer text-[12px] text-[#8E8E8E] "
        >
          Meta
        </a>
        <a
          href="https://about.instagram.com/"
          target="_blank"
          className="cursor-pointer text-[12px] text-[#8E8E8E] "
        >
          About
        </a>
        <a
          href="https://about.instagram.com/blog/"
          target="_blank"
          className="cursor-pointer text-[12px] text-[#8E8E8E] "
        >
          Blog
        </a>
        <a
          href="https://about.instagram.com/about-us/careers"
          target="_blank"
          className="cursor-pointer text-[12px] text-[#8E8E8E] "
        >
          Jobs
        </a>
        <a
          href="https://help.instagram.com/"
          target="_blank"
          className="cursor-pointer text-[12px] text-[#8E8E8E] "
        >
          Help
        </a>
        <a
          href="https://developers.facebook.com/docs/instagram"
          target="_blank"
          className="cursor-pointer text-[12px] text-[#8E8E8E] "
        >
          API
        </a>
        <a
          href="https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect"
          target="_blank"
          className="cursor-pointer text-[12px] text-[#8E8E8E] "
        >
          Privacy
        </a>
        <a
          href="https://help.instagram.com/581066165581870/"
          target="_blank"
          className="cursor-pointer text-[12px] text-[#8E8E8E] "
        >
          Terms
        </a>
        <a
          href="https://www.instagram.com/directory/profiles/"
          target="_blank"
          className="cursor-pointer text-[12px] text-[#8E8E8E] "
        >
          Top Accounts
        </a>
        <a
          href="https://www.instagram.com/explore/locations/"
          target="_blank"
          className="cursor-pointer text-[12px] text-[#8E8E8E] "
        >
          Locations
        </a>
        <a
          href="https://www.instagram.com/web/lite/"
          target="_blank"
          className="cursor-pointer text-[12px] text-[#8E8E8E] "
        >
          Instagram Lite
        </a>
        <a
          href="https://www.facebook.com/help/instagram/261704639352628"
          target="_blank"
          className="cursor-pointer text-[12px] text-[#8E8E8E] "
        >
          Contact Uploading & Non-Users
        </a>
        <a
          href="https://about.meta.com/technologies/meta-verified/"
          target="_blank"
          className="cursor-pointer text-[12px] text-[#8E8E8E] "
        >
          Meta Verified
        </a>
      </div>

      {/* Copyright  */}
      <div className="flex items-center justify-center gap-2">
        <div className="flex items-center justify-center">
          <a href="" target="_blank" className="text-[12px] text-[#8E8E8E]">
            English{" "}
          </a>
          <MdKeyboardArrowDown className="text-[20px] text-[#8E8E8E]" />
        </div>

        <a href="" target="_blank" className="text-[12px] text-[#8E8E8E]">
          {" "}
          © {""} 2023 Instagram from Meta{" "}
        </a>
      </div>
    </div>
  );
};

export default ProfileFooter;
