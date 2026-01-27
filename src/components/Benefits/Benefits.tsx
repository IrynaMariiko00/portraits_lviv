import { benefits } from "~/constants/benefits";
import { Reveal } from "~/components/ui/Reveal";

const Benefits = () => {
  return (
    <section className="px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <Reveal direction="up" className="text-center mb-12">
          <h1 className="title">
            Give your memories life <br /> through a{" "}
            <span className="text-blue">unique portrait</span>
          </h1>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <Reveal
              key={benefit.title}
              direction="up"
              delay={index * 0.1}
              className="h-full"
            >
              <div className="glass-card h-full relative overflow-hidden">
                <div className="hover-glow" />

                <div className="icon-box">
                  <img
                    alt={benefit.title}
                    src={benefit.icon}
                    className="w-6 h-6 object-contain brightness-0 invert"
                  />
                </div>

                <div className="relative z-10">
                  <h3 className="text card-title mb-2">{benefit.title}</h3>
                  <p className="text text-gray">{benefit.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
