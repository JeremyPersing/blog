import { ContentNavItem, NavItem } from "@/types";

import siteMetadata, { defaultAuthor } from "@/lib/metadata";

const content: ContentNavItem[] = [
  {
    title: "Blog",
    href: "/posts",
    description: "Blog posts about technical solutions, book reviews, and more.",
  },
  {
    title: "Videos",
    href: defaultAuthor.socialProfiles.find((platform) => platform.name === "youtube")?.link as string,
    description: "My YouTube channel",
  },
];

export const navigationLinks: NavItem[] = [
  {
    title: "Content",
    content,
  },
  {
    title: "Projects",
    href: "/projects",
  },
];
