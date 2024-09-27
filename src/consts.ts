import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Chung Chih",
  DESCRIPTION: "Welcome to my blog, a portfolio and blog for designers and developers.",
  AUTHOR: "Jason Chen",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  {
    TEXT: "Work",
    HREF: "/work",
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  // {
  //   TEXT: "Projects",
  //   HREF: "/projects",
  // },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "js910924@gmail.com",
    HREF: "mailto:js910924@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "js00000000",
    HREF: "https://github.com/js00000000"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Chen Chung Chih",
    HREF: "https://www.linkedin.com/in/chung-chih-chen/",
  },
  // {
  //   NAME: "Twitter",
  //   ICON: "twitter-x",
  //   TEXT: "",
  //   HREF: "",
  // },
]

