import { BiTime } from "react-icons/bi";
import { BsStack } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { HiMiniLightBulb } from "react-icons/hi2";
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '../utilis/motion';

const services = [
  {
    icon: <BsStack className="w-8 h-8 text-indigo-600" />,
    title: "Web Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipisci",
    link: "#learn-more",
  },
  {
    icon: <HiMiniLightBulb className="w-8 h-8 text-amber-600" />,
    title: "Ad-Creatives",
    description: "Lorem ipsum dolor sit amet, consectetur adipisci",
    link: "#learn-more",
  },
  {
    icon: <FiSettings className="w-8 h-8 text-red-600" />,
    title: "Automation",
    description: "Lorem ipsum dolor sit amet, consectetur adipisci",
    link: "#learn-more",
  },
  {
    icon: <BiTime className="w-8 h-8 text-cyan-600" />,
    title: "Infographics",
    description: "Lorem ipsum dolor sit amet, consectetur adipisci",
    link: "#learn-more",
  },
];

const SectionService = () => {
  return (
    <section
      id="services"
      className="py-20 container px-auto sm:px-6 lg:px-8"
    >
      <motion.div
        variants={staggerContainer(0.3, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24"
      >
        {/* Header */}
        <motion.div
          variants={textVariant(0.2)}
          className="md:w-1/3 w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5">
            Future of support with new shape
          </h2>
          <p className="text-gray-600 text-lg mb-4 md:4/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
              </div>
              <span className="text-gray-600">Lorem ipsum dolor sit amet</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
              </div>
              <span className="text-gray-600">Lorem ipsum dolor sit amet</span>
            </div>
          </div>

          <button className="mt-8 bg-indigo-600 text-white px-8 py-3 cursor-pointer rounded-full hover:bg-indigo-700 transition-colors">
            Get Started
          </button>
        </motion.div>

        {/* Service Cards */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 0.2 * index)}
              className="bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:scale-105 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.07 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="mb-4">{service.icon}</div>

              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a
                href={service.link}
                className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
              >
                EARN MORE
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SectionService;
