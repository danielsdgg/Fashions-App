import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
    });
  }, []);

  return (
    <div className='bg-[#104c4e]'>
      <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white'>
        <div data-aos="fade-up">
          <Link to={'/'}>
            <img
              src="https://res.cloudinary.com/ddei3mzex/image/upload/v1709419077/IMG-20240109-WA0001_szj2fg.jpg"
              className="h-4/12 w-3/12 mr-2 cursor-pointer"
              alt="Fashion Design"
            />
          </Link>
          <p className='py-4'>
            Shop through our application anytime and reach out to us in case of any enquiries.
          </p>
          <div className='flex justify-between md:w-[75%] my-6'>
            <a href="http://www.facebook.com" data-aos="zoom-in" className="text-white">
              <FaFacebookSquare size={30} />
            </a>
            <a href="http://www.instagram.com" data-aos="zoom-in" data-aos-delay="100" className="text-white">
              <FaInstagram size={30} />
            </a>
            <a href="http://www.twitter.com" data-aos="zoom-in" data-aos-delay="200" className="text-white">
              <FaTwitterSquare size={30} />
            </a>
            <a href="http://www.dribble.com" data-aos="zoom-in" data-aos-delay="300" className="text-white">
              <FaDribbbleSquare size={30} />
            </a>
          </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
          <div data-aos="fade-up">
            <h6 className='font-medium text-gray-400'>Solutions</h6>
            <ul>
              <li className='py-2 text-sm'>Analytics</li>
              <li className='py-2 text-sm'>Marketing</li>
              <li className='py-2 text-sm'>Commerce</li>
              <li className='py-2 text-sm'>Insights</li>
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <h6 className='font-medium text-gray-400'>Support</h6>
            <ul>
              <li className='py-2 text-sm'>Pricing</li>
              <li className='py-2 text-sm'>Documentation</li>
              <li className='py-2 text-sm'>Guides</li>
              <li className='py-2 text-sm'>API Status</li>
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <h6 className='font-medium text-gray-400'>Company</h6>
            <ul>
              <li className='py-2 text-sm'>About</li>
              <li className='py-2 text-sm'>Blog</li>
              <li className='py-2 text-sm'>Jobs</li>
              <li className='py-2 text-sm'>Press</li>
              <li className='py-2 text-sm'>Career</li>
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <h6 className='font-medium text-gray-400'>Legal</h6>
            <ul>
              <li className='py-2 text-sm'>Claim</li>
              <li className='py-2 text-sm'>Policy</li>
              <li className='py-2 text-sm'>Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
