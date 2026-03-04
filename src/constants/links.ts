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
  {
    title: "Instagram",
    icon: InstagramIcon,
    link: "https://www.instagram.com/portraits_lviv/",
  },
  {
    title: "Facebook",
    icon: FacebookIcon,
    link: "https://www.facebook.com/profile.php?id=100063902521109&locale=uk_UA",
  },
  {
    title: "YouTube",
    icon: YouTubeIcon,
    link: "https://www.youtube.com/@portraits_lviv",
  },
];

export const contactInfo: FooterItem[] = [
  { title: "Telegram", link: "https://t.me/IraMariiko" },
  { title: "Email", link: "mailto:irinamm497@gmail.com" },
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
