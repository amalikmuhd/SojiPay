import IMAGES from "../constants/images";

export const UserProfileTab = [
  {
    title: "Transaction history",
    icon: IMAGES.transactionIcon,
    link: "/transactionhistory",
  },
  { title: "Help", icon: IMAGES.helpIcon, link: "/help" },
  { title: "Log out", icon: IMAGES.logoutIcon, link: "/logout" },
];
export const ProfileSettingTab = [
  {
    title: "Change password",
    icon: IMAGES.passwordIcon,
    link: "/changepassword",
  },
  { title: "Change PIN", icon: IMAGES.passwordIcon, link: "/changepin" },
  { title: "About us", icon: IMAGES.passwordIcon, link: "/aboutus" },
];
