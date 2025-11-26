import { featuredTestimonials } from "~/constants/featuredTestimonials";
import { motion } from "framer-motion";

const FeaturedTestimonials = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between gap-10 items-center">
        <div className="flex flex-col max-w-lg z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="title"
          >
            What <span className="text-blue">My Clients</span> Say
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text mb-10"
          >
            My portraits become part of people’s lives. Here’s what my clients
            felt when they saw their stories brought to paper.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-btn w-fit"
          >
            See All <span className="arrow">→</span>
          </motion.button>
        </div>

        <div className="relative h-[500px] w-full md:w-[500px] flex-shrink-0">
          <div className="flex flex-col gap-[15px] h-full overflow-y-auto no-scrollbar ">
            {featuredTestimonials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full glass-card min-h-[255px]"
              >
                <img
                  src={item}
                  alt={`Testimonial ${index + 1}`}
                  className="max-w-full max-h-full rounded-lg object-contain opacity-90 hover:opacity-100 transition-opacity"
                />

                <div className="hover-glow" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTestimonials;
