import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: name, email: email, message: message })
    })
    .then((r) => r.json())
    .then((data) => console.log(data))
  }

  return (
    <>
      <Navbar />
      <div className="bg-gray-100">

        {/* First Section */}
        <div className="w-full bg-black py-16 px-4" data-aos="fade-up">
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center text-white text-center md:text-left">
              <img className="w-[120px] mx-auto md:mx-0 my-4" src="https://i.pinimg.com/736x/63/d9/1f/63d91f8fe7dacece85d70d7833dff18e.jpg" alt="/" />
              <h2 className="font-bold text-2xl">Fashion solutions</h2>
              <p className="mt-4">We go beyond a simple patch-up but develop lasting solutions through Hero-Cloth-Line. We design and customize outfits.</p>
            </div>
            <div className="flex flex-col justify-center text-white text-center md:text-left">
              <img className="w-[120px] mx-auto md:mx-0 my-4" src="https://i.pinimg.com/736x/63/d9/1f/63d91f8fe7dacece85d70d7833dff18e.jpg" alt="/" />
              <h2 className="font-bold text-2xl">Impact</h2>
              <p className="mt-4">We have made a great impacts with all companies and persons that have come in need of our services. The outlooks says it all. We are delighted to serve.</p>
            </div>
          </div>
        </div>

        {/* Second section */}
        <div className="max-w-[1200px] bg-gray-500 mx-auto w-full p-4 py-8" data-aos="fade-right">
          <h3 className="text-center text-white font-extrabold py-2 text-3xl">Reach Out to us for any Enquiries</h3>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <img src="https://www.fabusse.com/wp-content/uploads/2019/07/How-important-is-a-fashion-service-provider-01.jpg" alt="/"
              className="w-full h-auto object-cover rounded-lg" />
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="grid gap-4">
                <textarea className="border-2 border-black rounded-lg p-3" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name" ></textarea>
                <textarea className="border-2 border-black rounded-lg p-3" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" ></textarea>
                <textarea className="border-2 border-black rounded-lg p-3" cols="30" rows="10" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message goes here"></textarea>
                <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300" data-aos="zoom-in">Submit</button>
              </div>
            </form>
          </div>
        </div>

        {/* Third Section */}
        <div className="w-full bg-violet-200 text-black py-16 px-4 text-center" data-aos="fade-up">
          <p className="text-3xl md:text-6xl">First Impression Matters @ <b>Hero-Cloth-Line</b></p>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Services
