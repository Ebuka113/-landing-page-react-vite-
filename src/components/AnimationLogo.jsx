import { motion } from 'framer-motion';
import { fadeIn } from '../utilis/motion';

import logo1 from '../assets/logo1.jpg'
import logo2 from '../assets/logo2.jpg'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'

const AnimationLogo = () => {
    const logos = [logo1, logo2, logo3, logo4, logo5]

    return (
        <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            animate="show"
            className="w-full container mx-auto py-20 gap-8 flex sm:flex-row flex-col sm:items-center items-start
            px-4 sm:px-6 lg:px-8"
        >
            <div className="w-[300px] shrink-0 px-5 text-gray-600 border-l-4 border-blue-500
            bg-white py-2 z-10 text-xl font-semibold text-left">
                Proud sponsors at <br /> Ebuka & Ventures
            </div>

            {/* [...logos, ...logos] creates two sets of logos for seamless infinite scrolling */}
            <div className="flex-1 overflow-hidden ml-6">{/* Container for scrolling logos */}
                <div className="flex animate-marquee whitespace-nowrap">{/* animate-marquee is your CSS animation */}
                    {[...logos, ...logos].map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt="company logo"
                            className="mx-12 h-8 w-36 object-contain grayscale
                             opacity-70 hover:grayscale-0 
                             hover:opacity-100 transition-all"
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default AnimationLogo;
