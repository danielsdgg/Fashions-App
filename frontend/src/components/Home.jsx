import React, {useEffect} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Banner from './banner/Banner';
import TopRated from './TopRated/TopRated';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // animation duration in milliseconds
    });
  }, []);
  return (
    <>
    <Navbar/>
    <div>
      {/* 1st section */}
      <div className="first">
      <div className='w-full bg-gray-300 py-16 px-12'>
        <div className='max-w-[100%] mx-auto grid md:grid-cols-3'>
          {/* Text section */}
          <div className='flex flex-col justify-center text-black' data-aos="fade-right">
            <h2 className='font-semibold py-2 md:text-6xl sm:text-3xl text-2xl'>
              Fashion and designs corporate
            </h2>
            <p>
              Welcome to your no:1 fashion and designs store. Here we got all you need.
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              Beatae cum excepturi ad, itaque repellendus quibusdam rem voluptatum quae ullam, reprehenderit ratione aspernatur doloremque qui assumenda nihil officia, fugiat exercitationem autem?
            </p>
          </div>

          {/* First image */}
          <img
            className='w-[500px] mx-auto rounded-3xl my-4'
            src='https://res.cloudinary.com/ddei3mzex/image/upload/v1709419077/IMG-20240109-WA0001_szj2fg.jpg'
            alt=''
            data-aos="fade-left"
          />
          
          {/* Second image */}
          <img
            className='w-[500px] mx-auto rounded-3xl my-4'
            src='https://res.cloudinary.com/ddei3mzex/image/upload/v1709419077/IMG-20240109-WA0001_szj2fg.jpg'
            alt=''
            data-aos="fade-right"
          />
        </div>
      </div>
    </div>

      {/* 2nd section */}
      <Banner />

      {/* 3rd section */}
      <div className="w-full bg-black py-16 px-12">
        <div className="max-w-[100%] mx-auto grid md:grid-cols-2">
          <img
            data-aos="zoom-in"
            className="w-[500px] rounded-3xl mx-auto my-4"
            src="https://res.cloudinary.com/ddei3mzex/image/upload/v1694210974/fash_qqif6b.jpg"
            alt="imagery"
          />
          <div data-aos="fade-left" className="flex flex-col justify-center text-white">
            <h2 className="font-semibold py-2 md:text-6xl sm:text-3xl text-2xl">
              Effortless Search
            </h2>
            <p>
              Explore a curated selection of fashion designs, clothing for
              purchase, and services offered to our clients. Our intuitive
              interface makes finding your ideal taste a breeze.
            </p>
          </div>
        </div>
      </div>

      {/* 4th section */}

      < TopRated />

      {/* 5th section */}
      <div className="w-full bg-gray-300 py-16 px-16">
        <div className="max-w-[100%] mx-auto grid md:grid-cols-2">
          <div data-aos="fade-right" className="flex flex-col justify-center text-black">
            <h2 className="font-semibold py-2 md:text-6xl sm:text-3xl text-2xl">
              Message from our CEO:
            </h2>
            <p>
              Hero-Cloth-Line has one shared objective; To unlock the true potential of individuals, teams, and the community. We believe strongly in the power of sharing ideas and continuously strive to grow each other and ourselves.
            </p>
            <p>
              Internally, but also within the larger communities in which we are active. I am excited to be launching this website since it will connect us more to our clients. We are here to serve you. Enjoy..!
            </p>
          </div>
          <img
            data-aos="fade-left"
            className="w-[500px] rounded-3xl mx-auto my-4"
            src="https://res.cloudinary.com/ddei3mzex/image/upload/v1709418342/CEO_arkrdk.jpg"
            alt="CEO"
          />
        </div>
      </div>

    {/* 6th section of the homepage */}
    <div className="w-full bg-violet-200 text-black py-16 px-4 text-center md:text-6xl sm:text-3xl text-3xl">
        <p data-aos="fade-up">
          Become part of our mission and join <b>Hero-Cloth-Line</b>
        </p>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default Home