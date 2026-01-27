import CheckIcon from "~/assets/icons/CheckIcon";
import { smallBenefits } from "~/constants/benefits";
import { Reveal } from "../ui/Reveal";

const Process = () => {
  return (
    <section className="flex flex-col justify-center min-w-[90%] mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 max-w-lg">
          <h1 className="title">
            From Sketch to <span className="title text-blue">Portrait</span>
          </h1>

          <p className="subtitle">
            Every portrait tells a story. <br /> Here’s how your cherished
            moments come to life on canvas.
          </p>

          <ul className="space-y-5 my-10">
            {smallBenefits.map((item, index) => (
              <Reveal key={index} direction="right" delay={index * 0.15}>
                <div className="glass-icon">
                  <CheckIcon className="w-[20px] h-[20px]" />
                </div>

                <span className="text">{item}</span>
              </Reveal>
            ))}
          </ul>

          <Reveal direction="up" delay={0.6}>
            <button className="blue-btn h-[auto] w-[200px]">ORDER YOURS</button>
          </Reveal>
        </div>

        <Reveal
          direction="left"
          delay={0.4}
          className="relative w-full max-w-[300px] mr-[15%]"
        >
          <div className="rounded-2xl overflow-hidden">
            <div className="w-full aspect-[9/16]">
              <iframe
                className="w-full h-full object-cover"
                src="https://www.youtube.com/embed/we8BaVXru3k"
                title="Portrait Process"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Process;
