import { useState } from "react";
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, scale, textVariant } from '../utilis/motion';

const SectionPricing = () => {
  const [productCount, setProductCount] = useState(1);

  const starterPrice = Math.round(4000 * (productCount / 50));
  const businessPrice = Math.round(7500 * (productCount / 50));

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <motion.div
          variants={textVariant(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Pricing</h2>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {/* Starter Plan */}
          <motion.div
            variants={fadeIn('left', 0.2)}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-xl text-gray-600 mb-4">Starter</h3>
            <p className="text-3xl font-bold mb-6">${starterPrice}/mo</p>
          </motion.div>

          {/* Business Plan */}
          <motion.div
            variants={fadeIn('right', 0.4)}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-xl text-gray-600 mb-4">Business</h3>
            <p className="text-3xl font-bold mb-6">${businessPrice}/mo</p>
          </motion.div>
        </motion.div>

        {/* Slider */}
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <p className="text-center text-gray-600 mb-4">{productCount} products</p>

          <div className="relative px-4">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm text-gray-600">1</span>
              <input
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                type="range"
                min="1"
                max="50"
                value={productCount}
                onChange={(e) => setProductCount(parseInt(e.target.value))}
              />
              <span className="text-xs sm:text-sm text-gray-600">50</span>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={scale(0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-xl text-gray-600 mb-4">Ready to get started?</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
            Get Started
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default SectionPricing;
