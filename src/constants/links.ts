import InstagramIcon from "~/assets/icons/InstagramIcon";
import FacebookIcon from "~/assets/icons/FacebookIcon";
import YouTubeIcon from "~/assets/icons/YouTubeIcon";
import type { FooterItem, FooterSection } from "~/types/links";

export const quickLinks = [
  { title: "Home", link: "/" },
  { title: "About Me", link: "/about-me" },
  { title: "Portfolio", link: "/portfolio" },
  { title: "Testimonials", link: "/testimonials" },
  { title: "Price", link: "/price" },
  { title: "FAQ", link: "/faq" },
];

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
