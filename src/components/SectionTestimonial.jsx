
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import testimonialImage from '../assets/testimonialImage.png';
import { Navigation } from 'swiper/modules';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant, scale } from '../utilis/motion';



const testimonials = [
    {
        id: 1,
        name: "Ebus Gee",
        image: testimonialImage,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing elit, sed eiusmod tempor incididunt  sed eiusmod tempor incididunt ut labore et dolore magna aliquat.."
    },
    {
        id: 2,
        name: "Ebus Gee",
        image: testimonialImage,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut  consectetur adipiscing elit, sed eiusmod tempor incididunt labore et dolore magna aliquat.."
    },
    {
        id: 3,
        name: "Bros Gee",
        image: testimonialImage,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt consectetur adipiscing elit, sed eiusmod tempor incididunt  ut labore et dolore magna aliquat.."
    },
    {
        id: 4,
        name: "Ebus Gee",
        image: testimonialImage,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt consectetur adipiscing elit, sed eiusmod tempor incididunt  ut labore et dolore magna aliquat.."
    },
    {
        id: 5,
        name: "John Gee",
        image: testimonialImage,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt consectetur adipiscing elit, sed eiusmod tempor incididunt  ut labore et dolore magna aliquat.."
    },
    {
        id: 6,
        name: "Mary Gee",
        image: testimonialImage,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt consectetur adipiscing elit, sed eiusmod tempor incididunt  ut labore et dolore magna aliquat.."
    },
];



const SectionTestimonial = () => {
  return (
    <motion.section
      id="testimonials"
      className="py-16 px-4 max-w-7xl mx-auto"
      variants={staggerContainer(0.3, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Animated heading */}
      <motion.div className="text-center mb-12" variants={textVariant(0)}>
        <h2 className="text-3xl font-bold md:text-4xl mb-4">What our happy client say</h2>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur</p>
      </motion.div>

      <div className="relative">
        <Swiper
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          spaceBetween={30}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation]}
          className="testimonials-swiper md:mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id} className="h-full md:py-12">
              <motion.div
                className="text-center bg-white p-4 rounded-lg shadow-md h-full flex flex-col"
                variants={fadeIn('up', index * 0.3)}
              >
                <motion.div className="w-24 h-24 mx-auto md:mb-4" variants={scale(index * 0.3)}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </motion.div>

                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, starIndex) => (
                    <span key={starIndex}>⭐</span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-3">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.text}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <div className="flex justify-center gap-4 md:mt-8 mt-4">
          <button
            className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer"
          >
            <BsChevronLeft className="size-6" />
          </button>
          <button
            className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer"
          >
            <BsChevronRight className="size-6" />
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default SectionTestimonial;





{/**
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import testimonialImage from '../assets/testimonialImage.png';
import { Navigation } from 'swiper/modules';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import { useRef, useEffect, useState } from 'react';



const testimonials = [
    {
        id: 1,
        name: "Ebus Gee",
        image: testimonialImage,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliquat.."
    },
    {
        id: 2,
        name: "Ebus Gee",
        image: testimonialImage,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliquat.."
    },
    {
        id: 3,
        name: "Bros Gee",
        image: testimonialImage,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliquat.."
    },
    {
        id: 4,
        name: "Ebus Gee",
        image: testimonialImage,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliquat.."
    },
    {
        id: 5,
        name: "John Gee",
        image: testimonialImage,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliquat.."
    },
    {
        id: 6,
        name: "Mary Gee",
        image: testimonialImage,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliquat.."
    },
];


const SectionTestimonial = () => {

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);


    return (
       <section className="py-16 px-4 max-w-7xl mx-auto ">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold md:text-4xl mb-4">What our happy client say</h2>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur </p>
      </div>

      <div className="relative">
        <Swiper
          onSwiper={(swiper) => {
            // Assign navigation buttons AFTER DOM is rendered
            setTimeout(() => {
            if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;

                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
            }
            });
        }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation]}
          className="testimonials-swiper md:mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className='text-center bg-white p-4 rounded-lg shadow-md h-full flex flex-col'>
                <div className='w-24 h-24 mx-auto md:mb-4'>
                  <img src={testimonial.image} alt="" className='w-full h-full object-cover rounded-full' />
                </div>
                <div className='flex justify-center mb-2'>
                  {[...Array(5)].map((_, starIndex) => (
                    <span key={starIndex}>⭐</span>
                  ))}
                </div>
                <h3 className='text-xl font-semibold mb-3'>{testimonial.name}</h3>
                <p className='text-gray-600'>{testimonial.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

       
        <div className='flex justify-center gap-4 mt-8'>
          <button ref={prevRef} className='swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer'>
            <BsChevronLeft className='size-6'/>
          </button>
          <button ref={nextRef} className='swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer'>
            <BsChevronRight className='size-6'/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionTestimonial;.............................................................
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import testimonialImage from '../assets/testimonialImage.png';
import { Navigation } from 'swiper/modules';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import { useRef, useEffect, useState } from 'react';



const testimonials = [
    {
        id: 1,
        name: "Ebus Gee",
        image: testimonialImage,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliquat.."
    },
    {
        id: 2,
        name: "Ebus Gee",
        image: testimonialImage,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliquat.."
    },
    {
        id: 3,
        name: "Bros Gee",
        image: testimonialImage,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliquat.."
    },
    {
        id: 4,
        name: "Ebus Gee",
        image: testimonialImage,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliquat.."
    },
    {
        id: 5,
        name: "John Gee",
        image: testimonialImage,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliquat.."
    },
    {
        id: 6,
        name: "Mary Gee",
        image: testimonialImage,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliquat.."
    },
];


const SectionTestimonial = () => {

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);


    return (
       <section className="py-16 px-4 max-w-7xl mx-auto ">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold md:text-4xl mb-4">What our happy client say</h2>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur </p>
      </div>

      <div className="relative">
        <Swiper
          onInit={(swiper) => {
            // Assign navigation buttons AFTER DOM is rendered
            if (typeof swiper.params.navigation !== 'boolean') {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
              setSwiperReady(true);
            }
          }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation]}
          className="testimonials-swiper md:mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className='text-center bg-white p-4 rounded-lg shadow-md h-full flex flex-col'>
                <div className='w-24 h-24 mx-auto md:mb-4'>
                  <img src={testimonial.image} alt="" className='w-full h-full object-cover rounded-full' />
                </div>
                <div className='flex justify-center mb-2'>
                  {[...Array(5)].map((_, starIndex) => (
                    <span key={starIndex}>⭐</span>
                  ))}
                </div>
                <h3 className='text-xl font-semibold mb-3'>{testimonial.name}</h3>
                <p className='text-gray-600'>{testimonial.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='flex justify-center gap-4 mt-8'>
          <button ref={prevRef} className='swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer'>
            <BsChevronLeft className='size-6'/>
          </button>
          <button ref={nextRef} className='swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer'>
            <BsChevronRight className='size-6'/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionTestimonial; */}