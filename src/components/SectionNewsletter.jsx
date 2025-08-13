import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant, scale } from "../utilis/motion";

const SectionNewsletter = () => {
  return (
    <motion.section
      id="newsletter"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      variants={staggerContainer(0.3, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="bg-blue-600 rounded-2xl overflow-hidden">
        <div className="relative md:px-10 py-16 px-6 md:py-24">
          {/* gradient bg */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-700 clip-path-slant hidden md:block"></div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left content - slide in from left */}
            <motion.div
              className="text-white max-w-lg text-center md:text-left"
              variants={fadeIn("left", 0.3)}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4">
                Subscribe newsletter
              </h2>
              <p className="text-blue-100 text-sm sm:text-base">
                Lorem ipsum dolor ipsum dolor sit amet, consectetur adipiscing
                elit,
              </p>
            </motion.div>

            {/* Right content - slide in from right */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-0"
              variants={fadeIn("right", 0.6)}
            >
              <input
                type="text"
                placeholder="Enter your email address"
                className="w-full sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none bg-white"
              />
              <motion.button
                className="w-full sm:w-auto cursor-pointer bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-l-none sm:rounded-r-lg flex items-center gap-2"
                variants={scale(0.9)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Discover</span>
                <HiArrowRight className="size-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      <style>
        {`
          /* clip path for slant gradient */
          .clip-path-slant {
            clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        `}
      </style>
    </motion.section>
  );
};

export default SectionNewsletter;
