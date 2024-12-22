const navLinksData = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Chats",
    path: "/chats",
  },
  {
    name: "Requests",
    path: "/requests",
  },
];

const profileNavLinksData = [
  {
    name: "Home",
    path: "/",
    isMainLink: true,
  },
  {
    name: "Chats",
    path: "/chats",
    isMainLink: true,
  },
  {
    name: "Requests",
    path: "/requests",
    isMainLink: true,
  },
  {
    name: "Profile",
    path: "/profile",
    isMainLink: false,
  },
  {
    name: "Logout",
    path: "/logout",
    isMainLink: false,
  },
];

export { navLinksData, profileNavLinksData };
