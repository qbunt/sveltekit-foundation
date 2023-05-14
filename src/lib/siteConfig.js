export const config = {
  siteTitle: import.meta.env.VITE_SITE_TITLE,
  siteURL: import.meta.env.VITE_SITE_URL,
  siteDescription: import.meta.env.VITE_SITE_DESCRIPTION,
  siteAuthor: import.meta.env.VITE_SITE_AUTHOR,
  language: import.meta.env.VITE_SITE_LANGUAGE,
  copyright: `©${new Date().getFullYear()} ${import.meta.env.VITE_SITE_AUTHOR}`,
  headerNav: [
    { name: "Blog", link: "/blog" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
    { name: "Uses", link: "/posts/uses" }
  ]
}
