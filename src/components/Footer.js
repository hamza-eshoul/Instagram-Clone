import { MdKeyboardArrowDown } from "react-icons/md";

const footerLinks = [
  { linkName: "Meta", linkPath: "https://about.meta.com/" },
  { linkName: "About", linkPath: "https://about.instagram.com/" },
  { linkName: "Blog", linkPath: "https://about.instagram.com/blog/" },
  {
    linkName: "Jobs",
    linkPath: "https://about.instagram.com/about-us/careers",
  },
  { linkName: "Help", linkPath: "https://help.instagram.com/" },
  {
    linkName: "API",
    linkPath: "https://developers.facebook.com/docs/instagram",
  },
  {
    linkName: "Privacy",
    linkPath:
      "https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect",
  },
  {
    linkName: "Terms",
    linkPath: "https://help.instagram.com/581066165581870/",
  },
  {
    linkName: "Top Accounts",
    linkPath: "https://www.instagram.com/directory/profiles/",
  },
  {
    linkName: "Locations",
    linkPath: "https://www.instagram.com/explore/locations/",
  },
  {
    linkName: "Instagram Lite",
    linkPath: "https://www.instagram.com/web/lite/",
  },
  {
    linkName: "Contact Uploading & Non-Users",
    linkPath: "https://www.facebook.com/help/instagram/261704639352628",
  },
  {
    linkName: "Meta Verified",
    linkPath: "https://about.meta.com/technologies/meta-verified/",
  },
];

const Footer = () => {
  return (
    <div className="mb-7 flex w-screen flex-col items-center  gap-5 px-6">
      {/* Links */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {footerLinks.map((link) => (
          <a
            key={link.linkName}
            href={link.linkPath}
            className="cursor-pointer text-[12px] text-[#8E8E8E]"
          >
            {link.linkName}
          </a>
        ))}
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

export default Footer;
