import CheckIcon from "~/assets/icons/CheckIcon";
import { motion } from "framer-motion";
import { smallBenefits } from "~/constants/benefits";

const Process = () => {
  return (
    <section className="flex flex-col justify-center">
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
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-center gap-4 group"
              >
                <div className="glass-icon">
                  <CheckIcon className="w-[20px] h-[20px]"/>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                  className="text"
                >
                  {item}
                </motion.div>
              </motion.li>
            ))}
          </ul>

          <button className="blue-btn h-[auto] w-[200px]">ORDER YOURS</button>
        </div>

        <div className="relative w-full max-w-[300px] mr-[15%]">
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
        </div>
      </div>
    </section>
  );
};

export default Process;
