import { Link, NavLink } from "react-router-dom";
import InstagramIcon from "~/assets/icons/InstagramIcon";
import FacebookIcon from "~/assets/icons/FacebookIcon";
import YouTubeIcon from "~/assets/icons/YouTubeIcon";
import { quickLinks } from "~/constants/headerLinks";

export const social = [
    { title: "Instagram", icon: InstagramIcon, link: ""},
    { title: "Facebook", icon: FacebookIcon, link: "" },
    { title: "YouTube", icon: YouTubeIcon, link: "" }
]

export const contactInfo = [
    { title: "Telegram", link: ""},
    { title: "Email", link: "" }
]

const Footer = () => {
  return (
    <footer className="w-full border-t border-[var(--color-gray-light)]">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between">
        <Link to="/" className="big-bold self-center drop-shadow-[1px_1px_10px_var(--color-blue-dark)]">
          PortraitsLviv
        </Link>

        <div className="flex flex-row justify-between min-w-[50%] pt-[30px]">
          <div className="flex flex-col self-start">
            <h5 className="small-bold pl-1">Follow me:</h5>
          {social.map((item) => {
            const IconComponent = item.icon; 
            return (
            <div className="flex flex-row items-center gap-2 cursor-pointer text-[var(--color-primary)] hover:text-[var(--color-blue-text-light)]" key={item.title}>
              <IconComponent />
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
            )
          })}
           </div>
           <div className="flex flex-col self-start">
            <h5 className="small-bold">Contact me:</h5>
          {contactInfo.map((item) => (
            <div className="flex flex-row items-center gap-2 cursor-pointer text-[var(--color-primary)] hover:text-[var(--color-blue-text-light)]" key={item.title}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          ))}
          </div>
          <div className="flex flex-col self-start">
            <h5 className="small-bold">Pages:</h5>
          {quickLinks.map((item) => (
            <div className="flex flex-row items-center gap-2 cursor-pointer text-[var(--color-primary)] hover:text-[var(--color-blue-text-light)]" key={item.title}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          ))}
          </div>
        </div>
        </div>
        <p className="small-text text-[var(--color-gray-extra-light)] pb-5">© 2025 PortraitsLviv</p>
      </div>
    </footer>
  )
}

export default Footer;