import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { quickLinks } from "~/constants/links";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`h-20 w-full fixed z-20 ${
        isScrolled
          ? "bg-gray border-b border-[var(--color-gray-light)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center h-full justify-between">
        <Link
          to="/"
          className="small-bold pr-[40px] drop-shadow-[1px_1px_10px_var(--color-blue-dark)]"
        >
          PortraitsLviv
        </Link>

        <nav>
          <ul className="flex gap-[57px] small-bold">
            {quickLinks.map((item) => (
              <NavLink key={item.link} to={item.link} className="nav-link">
                {item.title}
              </NavLink>
            ))}
          </ul>
        </nav>

        <button className="glass-btn">
          <span>Get Your Portrait</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
