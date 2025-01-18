import { TiHome } from "react-icons/ti";
import { IoChatbox } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { RiUserFill } from "react-icons/ri";
import { RiSettingsFill } from "react-icons/ri";
import { FaUserCog } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa";

const navLinksData = [
  {
    name: "Home",
    icon: TiHome,
    path: "/",
  },
  {
    name: "Chats",
    icon: IoChatbox,
    path: "/chats",
  },
  {
    name: "Letters",
    icon: IoMdMail,
    path: "/letters",
  },
];

const profileNavLinksData = [
  {
    name: "Home",
    path: "/",
    icon: TiHome,
    isMainLink: true,
  },
  {
    name: "Chats",
    path: "/chats",
    icon: IoChatbox,
    isMainLink: true,
  },
  {
    name: "Letters",
    path: "/letters",
    icon: IoMdMail,
    isMainLink: true,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: RiUserFill,
    isMainLink: false,
  },
  {
    name: "Settings",
    path: "/profile/settings",
    icon: RiSettingsFill,
    isMainLink: false,
  },
];

const settingsSidebarLinkData = [
  {
    name: "Edit Info",
    linkName: "edit-profile",
    icon: FaUserCog,
  },
  {
    name: "Change Username",
    linkName: "edit-username",
    icon: FaUserEdit,
  },
  {
    name: "Change password",
    linkName: "edit-password",
    icon: FaUserLock,
  },
];

const interestsList = [
  "adventure",
  "aI",
  "anime",
  "astrology",
  "bowling",
  "birdwatching",
  "bodybuilding",
  "boardgames",
  "books",
  "camping",
  "calligraphy",
  "coffee",
  "collecting",
  "cooking",
  "culture",
  "cycling",
  "dIY",
  "drawing",
  "designing",
  "editing",
  "exercise",
  "fashion",
  "fishing",
  "food",
  "gardening",
  "gaming",
  "hiking",
  "history",
  "magic",
  "martial Arts",
  "meditation",
  "mountains",
  "movies",
  "music",
  "nature",
  "painting",
  "puzzles",
  "performing",
  "photography",
  "podcasting",
  "programming",
  "reading",
  "roadtrips",
  "running",
  "sculpting",
  "singing",
  "soccer",
  "stargazing",
  "travel",
  "web",
  "yoga",
];

const preferencesList = ["male", "female", "both"];

const languagesList = [
  "arabic",
  "bengali",
  "chinese",
  "english",
  "french",
  "german",
  "hindi",
  "indonesian",
  "iranian",
  "japanese",
  "portuguese",
  "russian",
  "spanish",
  "tamil",
  "turkish",
  "urdu",
  "ietnamese",
];

export {
  navLinksData,
  profileNavLinksData,
  settingsSidebarLinkData,
  interestsList,
  preferencesList,
  languagesList,
};
