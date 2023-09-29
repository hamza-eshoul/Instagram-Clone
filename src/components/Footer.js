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

const Footer = ({ profileFooter }) => {
  return (
    <footer
      className={`flex flex-col ${profileFooter} items-center gap-5 px-6 pb-8`}
    >
      {/* Links */}
      <ul className="flex flex-wrap items-center justify-center gap-4">
        {footerLinks.map((link) => (
          <li className="cursor-pointer text-[12px] text-[#8E8E8E]">
            <a key={link.linkName} href={link.linkPath}>
              {link.linkName}
            </a>
          </li>
        ))}
      </ul>

      {/* Copyright  */}
      <div className="flex items-center justify-center gap-2">
        <div className="flex items-center justify-center">
          <span className="text-[12px] text-[#8E8E8E]">English </span>
          <MdKeyboardArrowDown className="text-[20px] text-[#8E8E8E]" />
        </div>

        <p className="text-[12px] text-[#8E8E8E]">
          {" "}
          © {""} 2023 Instagram from Meta{" "}
        </p>
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  profileFooter: "ml-0",
};

export default Footer;
