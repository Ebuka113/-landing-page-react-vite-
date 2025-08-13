import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; //HiMenu → hamburger icon (☰)  HiX → close (×) icon

import { motion } from "framer-motion"
import { fadeIn } from "../utilis/motion";


const Navbar = () => {

    const [isMenuOpen, SetIsMenuOpen] = useState(false)
    const [activeLinks, SetActiveLinks] = useState('#home')

    const navLinks = [
         {href: "#home", label:"Home"},
         {href: "#about", label:"About"},
         {href: "#services", label:"Our Services"},
         {href: "#testimonials", label:"Testiomonials"},
    ]
    return(
        <motion.nav  
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
        className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
             <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
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
             {/* <div className="flex items-center gap-1 cursor-pointer">
                <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
                <div className="w-4 h-4 bg-red-500 -ml-2 rounded-full opacity-100 hover:opacity-75 transition-opacity"></div>
              </div>*/}

              {/* mobile menu button*/}
              <button onClick={() => SetIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
                {
                    isMenuOpen ? <HiX className="size-6"/> : <HiMenu className="size-6"/>
                }
              </button>


              {/* desktop navItems */}
              <div className="hidden md:flex items-center gap-10">
                {
                    navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            onClick={() => SetActiveLinks(link.href)}
                            className={`text-sm font-medium relative
                                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0
                                after:bg-blue-600 after:transition-all hover:after:w-full
                                ${activeLinks === link.href ? "text-blue-600 after:w-full" : "text-gray-600 hover:text-gray-900"}`}
                            >
                            {link.label}
                        </a>
                    ))
                }
              </div>

              {/* get in touch button */}
              <button className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700
              text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
                <a href="#newsletter">Get in touch</a>
              </button>


             </div>

             {/*Mobile Menu Items */}
             {
                isMenuOpen && (
                    <div className="md-hidden bg-white border-t border-gray-100 py-4">
                        <div className="container mx-auto px-4 space-y-3">
                            {navLinks.map((link, index) => (
                                <a href={link.href}
                                key={index}
                                onClick={() => {
                                    SetActiveLinks(link.href);
                                    SetIsMenuOpen(false)
                                }}
                                className={`block text-sm font-medium py-2
                                     ${activeLinks === link.href ? "text-blue-600" : "text-gray-600 hover:text-gray-900" 
                                     }`}>
                                        {link.label}
                                        </a>
                            ))}
                            {/* get in touch button */}
                            <button className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700
                            text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
                                <a href="#newsletter">Get in touch</a>
                            </button>
                        </div>
                    </div>
                )
             }
        </motion.nav>
    )
}

export default Navbar;