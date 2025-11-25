import { featuredTestimonials } from "~/constants/featuredTestimonials";
import { motion } from "framer-motion";

const FeaturedTestimonials = () => {
  return (
    <section>
      <div className="flex justify-between gap-[10%]">
        <div className="flex flex-col">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="title"
          >
            What <span className="text-blue">My Clients</span> Say
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="subtitle"
          >
            My portraits become part of people’s lives. Here’s what my clients
            felt when they saw their stories brought to paper.
          </motion.h3>

          <button className="glass-btn mt-[10%] w-[30%]">
            <span>
              See All <span className="arrow">→</span>
            </span>
          </button>
        </div>

        <ul className="h-[500px] w-[500px] flex-shrink-0 overflow-y-scroll mr-[7%] rounded-xl custom-scrollbar">
          {featuredTestimonials.map((item, index) => (
            <li
              key={index}
              className="h-[auto] w-full bg-[transparent]  mt-[10%] first:mt-0  rounded-xl"
            >
              <img
                src={item}
                alt="testimonial"
                className="object-contain w-full h-full"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeaturedTestimonials;
