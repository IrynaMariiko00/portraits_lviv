import { motion } from "framer-motion";

const LiquidBackground = () => (
  <div>
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 90, 0],
        x: [0, 100, 0],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--color-blue-bg)] rounded-full blur-[120px]"
    />
    <motion.div
      animate={{
        scale: [1, 1.5, 1],
        rotate: [0, -60, 0],
        y: [0, -100, 0],
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-0 right-0 w-[600px] h-[600px]  bg-[var(--color-purple-bg)] rounded-full blur-[120px]"
    />
  </div>
);

export default LiquidBackground;
