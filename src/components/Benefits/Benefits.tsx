import { benefits } from "~/constants/benefits";
import { motion } from "framer-motion";

const Benefits = () => {
  return (
    <section className="px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="title text-center">
          Give your memories life <br /> through a{" "}
          <span className="text-blue">unique portrait</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card"
            >
              <div className="hover-glow" />

              <div className="icon-box">
                <img
                  alt={benefit.title}
                  src={benefit.icon}
                  className="w-6 h-6 object-contain brightness-0 invert"
                />
              </div>

              <div className="relative z-10">
                <h3 className="text mb-2">{benefit.title}</h3>
                <p className="text text-[var(--color-gray-extra-light)]">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
