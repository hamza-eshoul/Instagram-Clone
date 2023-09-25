const links_list = [
  { linkName: "About", linkUrl: "https://about.instagram.com/" },
  { linkName: "Help", linkUrl: "https://help.instagram.com/" },
  { linkName: "Press", linkUrl: "https://about.instagram.com/blog/" },
  {
    linkName: "API",
    linkUrl: "https://developers.facebook.com/docs/instagram",
  },
  { linkName: "Jobs", linkUrl: "https://about.instagram.com/about-us/careers" },
  {
    linkName: "Privacy",
    linkUrl:
      "https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect",
  },
  { linkName: "Terms", linkUrl: "https://help.instagram.com/581066165581870/" },

  {
    linkName: "Locations",
    linkUrl: "https://www.instagram.com/explore/locations/",
  },

  {
    linkName: "Language",
    linkUrl: "#",
  },
  {
    linkName: "Meta Verified",
    linkUrl: "https://about.meta.com/technologies/meta-verified/",
  },
];

const AsideLinks = () => {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1 opacity-50 dark:opacity-100">
      {links_list.map((link) => (
        <a
          key={link.linkName}
          href={link.linkUrl}
          target="_blank"
          className="asideLink"
        >
          {" "}
          {link.linkName}
        </a>
      ))}
    </div>
  );
};

export default AsideLinks;
