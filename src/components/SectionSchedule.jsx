import scheduleImage from '../assets/scheduleImage.png';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { motion } from 'framer-motion';
import { fadeIn } from '../utilis/motion';

const SectionSchedule = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
                
                {/* Left Section (Image) */}
                <motion.div
                    variants={fadeIn('left', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="md:w-1/2 w-full"
                >
                    <img
                        src={scheduleImage}
                        alt="schedule networking stats image"
                        className="w-full h-auto"
                    />
                </motion.div>

                {/* Right Section (Text) */}
                <motion.div
                    variants={fadeIn('right', 0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="md:w-1/2 w-full"
                >
                    <p className="text-orange-500 font-semibold">SCHEDULE</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6">
                        Lorem Ipsum Dolor <br /> Sed Tempor Incididun Sit Amet
                    </h2>

                    <p className="text-gray-600 mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliquat. Eiusmod 
                        tempor incididunt ut labore et dolore magna aliquat.
                    </p>

                    <a
                        href="#"
                        className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
                    >
                        Explore scheduling features
                        <IoIosArrowRoundForward className="size-8" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default SectionSchedule;
