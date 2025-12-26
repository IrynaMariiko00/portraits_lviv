import { ABOUT_ME_CONTENT } from "../../constants/aboutMe";

const AboutMePage = () => {
  const {
    TITLE,
    TITLE_ACCENT,
    GREETING,
    NAME,
    QUOTE,
    PARAGRAPHS,
    BUTTON_TEXT,
  } = ABOUT_ME_CONTENT;

  return (
    <main className="py-[130px]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            {TITLE} <span className="text-blue">{TITLE_ACCENT}</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <img
                src="/images/aboutMe/me.png"
                alt="Iryna - Portrait Artist"
                className="w-full h-auto object-cover transform hover:scale-105 transition duration-700"
              />
            </div>
          </div>

          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <h3 className="text-3xl font-semibold text-white">
              {GREETING} <span className="text-blue">{NAME}</span>
            </h3>

            <p>
              {PARAGRAPHS.ONE.BEFORE}
              <span className="text-white font-medium">
                {PARAGRAPHS.ONE.HIGHLIGHT}
              </span>
              {PARAGRAPHS.ONE.AFTER}
            </p>

            <p>
              {PARAGRAPHS.TWO.MAIN}{" "}
              <span className="italic text-white">{PARAGRAPHS.TWO.ITALIC}</span>
            </p>

            <p>{PARAGRAPHS.THREE}</p>

            <div className="bg-white/5 border-l-4 border-blue p-6 mt-8 rounded-r-lg">
              <p className="text-white font-medium italic">"{QUOTE}"</p>
            </div>

            <div className="pt-8 self-end">
              <a href="/#contact" className="blue-btn w-[37%]">
                {BUTTON_TEXT}
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutMePage;
