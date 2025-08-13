import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin, FaTwitter, FaX } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../utilis/motion";

const footerLinks = {
  company: [
    { name: "About", href: "#" },
    { name: "Terms of Use", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Now it Works", href: "#" },
    { name: "Contact Us", href: "#" },
  ],
  getHelp: [
    { name: "Support Career", href: "#" },
    { name: "24h Service", href: "#" },
    { name: "Quick Chat", href: "#" },
  ],
  support: [
    { name: "Faq", href: "#" },
    { name: "Policy", href: "#" },
    { name: "Business", href: "#" },
  ],
  contact: [
    { name: "Whatsapp", href: "#" },
    { name: "Support 24", href: "#" },
  ],
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-50"
      variants={staggerContainer(0.2, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* brand column */}
          <motion.div
            className="lg:col-span-4"
            variants={fadeIn("left", 0.2)}
          >
            <div className="flex gap-1 items-center mb-6">
              {/* logo */}
              <h1
                    className="text-2xl font-bold cursor-pointer select-none flex gap-1"
                    style={{ fontFamily: "'Dancing Script', cursive" }}
                    >
                    <span
                        className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text
                                transition-transform duration-300 ease-in-out
                                hover:scale-110 hover:from-blue-700 hover:to-blue-500"
                    >
                        Ebuka
                    </span>
                    <span
                        className="bg-gradient-to-r from-red-500 to-red-400 text-transparent bg-clip-text
                                transition-transform duration-300 ease-in-out
                                hover:scale-110 hover:from-red-600 hover:to-red-500"
                    >
                        -Charles
                    </span>
            </h1>
              <span className="text-xl font-medium ml-1">The Next Design</span>
            </div>

            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                <FaFacebookF className="size-5" />
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all duration-200"
              >
                <FaX className="size-5" />
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                <FaLinkedin className="size-5" />
              </a>
            </div>
          </motion.div>

          {/* footer nav columns */}
          <motion.div
            className="lg:col-span-8"
            variants={fadeIn("right", 0.4)}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                <motion.div
                  key={category}
                  variants={textVariant(categoryIndex * 0.2)}
                >
                  <h3 className="text-lg font-medium mb-4 uppercase">{category}</h3>
                  <ul className="space-y-3">
                    {links.map((link, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* footer bottom section */}
        <motion.div
          className="border-t border-gray-200 mt-12 pt-8"
          variants={fadeIn("up", 0.6)}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              Copyright c {new Date().getFullYear()}
            </p>
            <p className="text-gray-600 text-sm">Md Al Manury - Ebuka Charles</p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
