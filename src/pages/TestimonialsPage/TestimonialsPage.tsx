import LiquidBackground from "~/components/ui/LiquidBackground/LiquidBackground";
import { Reveal } from "~/components/ui/Reveal";
import { TESTIMONIALS } from "~/constants/testimonials";
import { useScrollTop } from "~/hooks/useScrollTop";

const TestimonialsPage = () => {
  useScrollTop();
  return (
    <section className="relative min-h-screen px-6 py-36 scroll-smooth">
      <LiquidBackground />

      <div className="max-w-6xl mx-auto flex flex-col gap-10 mb-24">
        <Reveal direction="up">
          <h1 className="extra-big">
            What <br />
            <span className="text-blue">My Clients</span> Say
          </h1>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <p className="text text-gray max-w-2xl">
            My portraits become part of people’s lives.
            <br />
            Here’s what my clients felt when they saw their stories brought to
            paper.
          </p>
        </Reveal>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-44">
        {TESTIMONIALS.map((item, index) => {
          const isEven = index % 2 !== 0;

          return (
            <div
              key={item.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${isEven ? "lg:direction-rtl" : ""}`}
            >
              <div className={`${isEven ? "lg:order-2" : ""}`}>
                <Reveal direction={isEven ? "right" : "left"} delay={0.3}>
                  <div className="glass-card group overflow-hidden rounded-2xl p-6 z-10 flex items-center">
                    <img
                      src={item.portraitImage}
                      alt="Portrait"
                      className="rounded-2xl shadow-2xl max-h-[420px] w-min object-contain zoom-image transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </Reveal>
              </div>

              <img
                src={item.testimonialImage}
                alt="Testimonial"
                className="z-10"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TestimonialsPage;
