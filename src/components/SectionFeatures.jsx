import { motion } from 'framer-motion';
import { fadeIn, textVariant, staggerContainer, scale } from '../utilis/motion';

const SectionFeatures = () => {
    const features = [
        {
          icon: "🔍︎",
          title: "Find out what you need",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
          icon: "⚙️",
          title: "Work out the details",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
          icon: "🚀",
          title: "We get to work fast",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            {/* Heading Text */}
            <motion.div
                variants={textVariant(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl font-bold mb-4">Lorem ipsum dolor sit amet consectetur?</h2>
                <p className="text-gray-600">Sed do eiusmod tempor incididunt ut labore et dolore magna aliquat.</p>
            </motion.div>

            {/* Features Boxes */}
            <motion.div
                variants={staggerContainer(0.2, 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        variants={fadeIn('up', 0.2 * index)}
                        className="flex flex-col text-center items-center p-6"
                    >
                        <div
                            className="w-24 h-24 rounded-full mb-6 flex items-center justify-center"
                            style={{
                                backgroundColor:
                                    index === 0 ? "#F1EFFD" : index === 1 ? "#FEE7E7" : "#FFF3E4"
                            }}
                        >
                            <div className="text-3xl">{feature.icon}</div>
                        </div>

                        <h3 className="text-2xl font-medium mb-3">{feature.title}</h3>
                        <p className="text-gray-500 text-center">{feature.description}</p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Button */}
            <motion.div
                variants={scale(0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-center mt-12"
            >
                <button
                    className="bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full
                        font-medium hover:bg-blue-700 transition-colors relative"
                >
                    Become a Partner
                    <div className="absolute -z-10 w-full h-full rounded-full bg-blue-600/50 blur-xl top-0 left-0"></div>
                </button>
            </motion.div>
        </section>
    );
};

export default SectionFeatures;
