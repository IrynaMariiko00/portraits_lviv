import { ABOUT_ME_CONTENT } from "~/constants/addText";
import mePhoto from "~/assets/images/aboutMe/me.png";
import { Reveal } from "~/components/ui/Reveal";

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
    <main className="py-[130px] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal
          direction="down"
          duration={0.8}
          className="mb-16 text-center lg:text-left"
        >
          <h1 className="title">
            {TITLE} <span className="text-blue">{TITLE_ACCENT}</span>
          </h1>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal direction="right" delay={0.2} duration={0.8}>
            <div className="relative group">
              <div className="glass-border-card overflow-hidden rounded-2xl">
                <img
                  src={mePhoto}
                  alt="Iryna - Portrait Artist"
                  className="zoom-image transition-transform duration-700 group-hover:scale-105"
                />
                <div className="card-overlay" />
              </div>

              <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-blue/20 blur-3xl rounded-full" />
            </div>
          </Reveal>

          <div className="space-y-6 leading-relaxed">
            <Reveal direction="up" delay={0.3}>
              <h3 className="big-bold">
                {GREETING} <span className="text-blue">{NAME}</span>
              </h3>
            </Reveal>

            <div className="space-y-4">
              {PARAGRAPHS.map((paragraph, index) => (
                <Reveal key={index} direction="up" delay={0.4 + index * 0.15}>
                  <p className="text">
                    {paragraph.text}
                    {paragraph.highlight && (
                      <span className="text-blue font-medium">
                        {" "}
                        {paragraph.highlight}
                      </span>
                    )}
                    {paragraph.after && <span> {paragraph.after}</span>}
                    {paragraph.italic && (
                      <span className="italic text text-gray block mt-2">
                        {paragraph.italic}
                      </span>
                    )}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal direction="left" delay={0.8} duration={0.8}>
              <div className="bg-white/5 border-l-4 border-blue p-6 mt-8 rounded-r-lg backdrop-blur-sm">
                <p className="text italic text-lg text-white/90">"{QUOTE}"</p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={1} className="pt-8">
              <a
                href="/#contact"
                className="blue-btn inline-block text-center min-w-[200px]"
              >
                {BUTTON_TEXT}
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutMePage;
