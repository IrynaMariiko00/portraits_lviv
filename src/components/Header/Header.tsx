import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { headerLinks } from "~/constants/headerLinks";

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
        isScrolled ? "bg-gray border-b border-grayLight" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center h-full justify-between">
        <Link to="/" className="small-bold">
          PortraitsLviv
        </Link>

        <nav>
          <ul className="flex gap-[57px] small-bold">
            {headerLinks.map((item) => (
              <NavLink key={item.link} to={item.link} className="nav-link">
                {item.name}
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
