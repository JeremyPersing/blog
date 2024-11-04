import { AuthorType, SiteMetaData } from "@/types";

import { socialProfiles } from "./social-data";

export const BASE_URL =
  `https://${process.env.VERCEL_URL}` ||
  process.env.NEXT_PUBLIC_BASE_URL ||
  `http://localhost:${process.env.PORT || 3000}`;

export const defaultAuthor: AuthorType = {
  name: "Jeremy Persing",
  handle: "",
  socialProfiles,
  email: "jpersing1999@gmail.com",
  website: "https://jeremypersing.com",
  jobTitle: "Analytics Consultant",
  company: undefined,
  availableForWork: false,
  location: {
    city: "Minneapolis, MN",
    media: "/losangeles.jpg",
  },
};

const defaultTitle = `${defaultAuthor.name}'s Blog`;
const defaultDescription = `I'm ${defaultAuthor.name}`;

const siteMetadata: SiteMetaData = {
  title: {
    template: `%s | ${defaultTitle}`,
    default: defaultTitle,
  },
  description: defaultDescription,
  siteRepo: "https://github.com/JeremyPersing/blog",
  newsletterProvider: undefined,
  newsletterUrl: undefined,
  analyticsProvider: "google",
  defaultTheme: "system",
  activeAnnouncement: false,
  announcement: {
    buttonText: "",
    link: "",
  },
  postsPerPage: 10,
  postsOnHomePage: 8,
  projectsOnHomePage: 4,
};

export default siteMetadata;
