import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GrSecure } from 'react-icons/gr';
import { IoFastFood, IoCard, IoGift } from 'react-icons/io5';

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
    });
  }, []);

  return (
<div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
  <div className="container">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
      {/* image section */}
      <div data-aos="zoom-in">
        <img
          className="w-[500px] mx-auto rounded-3xl my-4"
          src="https://img.freepik.com/premium-vector/hand-drawing-beautiful-young-woman-portrait-fashion-girl-with-coffee-girl-warm-jacket-sketch-illustration_357668-27.jpg?w=2000"
          alt=""
        />
      </div>

      {/* text details section */}
      <div className="flex flex-col justify-center gap-6 sm:pt-0 relative">
        {/* Faint vertical line */}
        <div
          className="absolute right-[110%] top-0 h-full bg-gray-300 w-0.5"
          style={{ transform: 'translateX(-50%)' }}
          data-aos="fade-right"
        ></div>
        <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
          We give value to you
        </h1>
        <p
          data-aos="fade-up"
          className="text-sm text-gray-500 tracking-wide leading-5"
        >
          At Hero-Clothline, you can be sure of:
        </p>
        <div className="flex flex-col gap-4">
          <div data-aos="fade-up" className="flex items-center gap-4">
            <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
            <p>Quality Products</p>
          </div>
          <div data-aos="fade-up" className="flex items-center gap-4">
            <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
            <p>Fast Delivery</p>
          </div>
          <div data-aos="fade-up" className="flex items-center gap-4">
            <IoCard className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
            <p>Easy Payment method</p>
          </div>
          <div data-aos="fade-up" className="flex items-center gap-4">
            <IoGift className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
            <p>Getting Offers</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Banner;
