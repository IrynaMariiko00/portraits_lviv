import InstagramIcon from "~/assets/icons/InstagramIcon";
import FacebookIcon from "~/assets/icons/FacebookIcon";
import YouTubeIcon from "~/assets/icons/YouTubeIcon";
import { quickLinks } from "~/constants/headerLinks";
import type { FooterItem, FooterSection } from "~/types/footerItem";

export const social: FooterItem[] = [
  { title: "Instagram", icon: InstagramIcon, link: "" },
  { title: "Facebook", icon: FacebookIcon, link: "" },
  { title: "YouTube", icon: YouTubeIcon, link: "" },
];

export const contactInfo: FooterItem[] = [
  { title: "Telegram", link: "" },
  { title: "Email", link: "" },
];

export const footerSections: FooterSection[] = [
  {
    title: "Contact me:",
    items: social,
    withIcon: true,
  },
  {
    title: "Contact me:",
    items: contactInfo,
    withIcon: false,
  },
  {
    title: "Pages:",
    items: quickLinks,
    withIcon: false,
  },
];
