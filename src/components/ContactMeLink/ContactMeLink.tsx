import React from "react";
import { Link } from "react-router-dom";
import type { TextSectionProps } from "~/types/addText";

const ContactMeLink: React.FC<TextSectionProps> = ({ title, description }) => {
  return (
    <section className="flex flex-col justify-center text-center items-center py-[20px]">
      <h1 className="extra-big leading-none">
        {title.map((part, idx) => (
          <React.Fragment key={idx}>
            <span className={part.className}>{part.text}</span>{" "}
          </React.Fragment>
        ))}
      </h1>
      <h3 className="text text-gray leading-relaxed mt-4 mb-[5%] max-w-[60%]">
        {description}
      </h3>
      <Link to="/contact" className="blue-btn w-fit">
        Contact me
      </Link>
    </section>
  );
};

export default ContactMeLink;
