import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Design = () => {
  return (
    <>
    <Navbar/>
    <div className='w-full bg-violet-200 text-black py-16 px-4 text-center md:text-6xl sm:text-3xl text-3xl'>
        <p>Our latest designs and fashion shows<b> </b></p>
    </div>
    <div className='w-full bg-black py-16 px-12'>
    <div className='max-w-[100%] mx-auto grid md:grid-cols-2'>
      <img className='w-[500px] rounded-3xl mx-auto my-4' src='https://res.cloudinary.com/ddei3mzex/image/upload/v1694210974/fash_qqif6b.jpg' alt='imagery'/>
      <div className='flex flex-col justify-center text-white'>
        <h2 className='font-semibold py-2 md:text-6xl sm:text-3xl text-2xl'>Designer pants</h2>
        <p>
          This design was one of the showcased Projects during the kibera fashion week. The outfit speaks for itself .Dressing well brings out the best in you.
        </p>
      </div>
    </div>
  </div>
  <Footer />
  </>
  )
}

export default Design