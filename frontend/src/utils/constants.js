import { MdHome } from "react-icons/md";
import { IoChatbox } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const navLinksData = [
  {
    name: "Home",
    icon: MdHome,
    path: "/",
  },
  {
    name: "Chats",
    icon: IoChatbox,
    path: "/chats",
  },
  {
    name: "Requests",
    icon: IoNotifications,
    path: "/requests",
  },
];

const profileNavLinksData = [
  {
    name: "Home",
    path: "/",
    icon: MdHome,
    isMainLink: true,
  },
  {
    name: "Chats",
    path: "/chats",
    icon: IoChatbox,
    isMainLink: true,
  },
  {
    name: "Requests",
    path: "/requests",
    icon: IoNotifications,
    isMainLink: true,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: CgProfile,
    isMainLink: false,
  },
];

export { navLinksData, profileNavLinksData };
