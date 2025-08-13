import { motion } from 'framer-motion';
import { fadeIn, textVariant, staggerContainer } from '../utilis/motion';

const SectionPurpose = () => {
  const features = [
    {
      icon: "📢",
      title: "Built for impact",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur adipiscing elit, sed do ",
    },
    {
      icon: "🚨",
      title: "In sync with you",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur adipiscing elit, sed do",
    },
  ];

  return (
    <section
      id="about"
      className="w-full bg-gray-50 py-16 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 grid-cols-1 gap-8"
        >
          {/* Heading Text */}
          <motion.div variants={textVariant(0.1)}>
            <p className="text-sm text-purple-600 font-medium mb-2">
              LOREM IPSUM
            </p>
            <h2 className="text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-900">
              Lorem ipsum dolor aectetur sit amet
            </h2>
          </motion.div>

          {/* Bullet Points */}
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.2 * index)}
                className="flex space-x-4"
              >
                <div className="w-12 h-12 flex items-center justify-start rounded-lg text-2xl">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionPurpose;
