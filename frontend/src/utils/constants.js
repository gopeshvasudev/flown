import { TiHome } from "react-icons/ti";
import { IoChatbox } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
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
    name: "Requests",
    icon: IoNotifications,
    path: "/requests",
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
    name: "Requests",
    path: "/requests",
    icon: IoNotifications,
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
    name: "Edit Profile",
    icon: FaUserCog,
  },
  {
    name: "Edit Username",
    icon: FaUserEdit,
  },
  {
    name: "Change password",
    icon: FaUserLock,
  },
];

const interestsList = [
  "Adventure",
  "AI",
  "Anime",
  "Astrology",
  "Bowling",
  "Birdwatching",
  "Bodybuilding",
  "Boardgames",
  "Books",
  "Camping",
  "Calligraphy",
  "Coffee",
  "Collecting",
  "Cooking",
  "Culture",
  "Cycling",
  "DIY",
  "DJing",
  "Drawing",
  "eSports",
  "Fashion",
  "Fishing",
  "Food",
  "Gardening",
  "Designing",
  "Gaming",
  "Hiking",
  "History",
  "Magic",
  "Martial Arts",
  "Meditation",
  "Mountains",
  "Movies",
  "Music",
  "Nature",
  "Painting",
  "Puzzles",
  "Performing",
  "Photography",
  "Podcasting",
  "Programming",
  "Reading",
  "Roadtrips",
  "Running",
  "Sculpting",
  "Singing",
  "Soccer",
  "Travel",
  "Stargazing",
  "Web",
  "Yoga",
];

const preferencesList = ["male", "female", "both"];

const languagesList = [
  "Arabic",
  "Bengali",
  "Chinese",
  "English",
  "French",
  "German",
  "Hindi",
  "Indonesian",
  "Iranian",
  "Japanese",
  "Portuguese",
  "Russian",
  "Spanish",
  "Tamil",
  "Turkish",
  "Urdu",
  "Vietnamese",
];

export {
  navLinksData,
  profileNavLinksData,
  settingsSidebarLinkData,
  interestsList,
  preferencesList,
  languagesList,
};
