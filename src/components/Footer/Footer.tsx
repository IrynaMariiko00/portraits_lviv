import { Link, NavLink } from "react-router-dom";
import { footerSections } from "~/constants/footer";

const Footer = () => {
  return (
    <footer className="w-full border-t border-[var(--color-gray-light)]">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between">
          <Link
            to="/"
            className="big-bold self-center drop-shadow-[1px_1px_10px_var(--color-blue-dark)]"
          >
            PortraitsLviv
          </Link>

          <div className="flex flex-row justify-between min-w-[50%] pt-[30px]">
            {footerSections.map((section) => (
              <div className="flex flex-col self-start" key={section.title}>
                <h5 className="small-bold pl-1">{section.title}</h5>

                {section.items.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex flex-row items-center gap-2 cursor-pointer text-[var(--color-primary)] hover:text-[var(--color-blue-text-light)]"
                    >
                      {IconComponent && <IconComponent />}
                      <NavLink to={item.link}>{item.title}</NavLink>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <p className="small-text text-[var(--color-gray-extra-light)] pb-5">
          © 2025 PortraitsLviv
        </p>
      </div>
    </footer>
  );
};

export default Footer;
