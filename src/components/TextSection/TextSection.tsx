import "~/styles/blobs.css";
import type { TextSectionProps } from "~/types/addText";

const TextSection: React.FC<TextSectionProps> = ({ title, description }) => {
  return (
    <section className="text-center philosophy-section relative min-h-[500px] flex w-[100vw] ml-[-50vw] left-[50%] overflow-hidden justify-center items-center">
      <div>
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <div className="relative w-full max-w-screen-lg mx-auto z-10">
        <h1 className="title">
          {title.map((part, idx) => (
            <span key={idx} className={part.className}>
              {part.text}{" "}
            </span>
          ))}
        </h1>

        <p className="subtitle max-w-[60%] mx-auto text-shadow-[var(--text-shadow-dark)]">
          {description}
        </p>
      </div>
    </section>
  );
};

export default TextSection;
