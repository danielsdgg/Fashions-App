import React from 'react';
import Img1 from '../../assets/design.jpeg';
import Img2 from '../../assets/w-pants.jpg';
import Img3 from '../../assets/patch.jpg';
import Img4 from '../../assets/african.jpg';
import Img5 from '../../assets/pants.jpg';
import { FaStar } from 'react-icons/fa';


const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Men's wear",
    rating: 5.0,
    color: "Blue",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women design",
    rating: 4.5,
    color: "Blend",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "pants",
    rating: 4.7,
    color: "African touch",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "African Full Set",
    rating: 4.4,
    color: "Red",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Pants",
    rating: 4.5,
    color: "Blend",
    aosDelay: "800",
  },
];

const TopRated = () => {
  return (
    <div className="mt-14 mb-12">
    <div className="container">
      {/* Header section */}
      <div className="text-center mb-10 max-w-[600px] mx-auto">
        <p data-aos="fade-up" className="text-sm text-primary">
          Top Selling Products for you
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Products
        </h1>
        <p data-aos="fade-up" className="text-xs text-gray-400">
          We deliver the best
        </p>
      </div>
      {/* Body section */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
          {/* card section */}
          {ProductsData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="space-y-3"
            >
              <img
                src={data.img}
                alt=""
                className="h-[220px] w-[150px] object-cover rounded-md"
              />
              <div>
                <h3 className="font-semibold">{data.title}</h3>
                <p className="text-sm text-gray-600">{data.color}</p>
                <div className="flex items-center gap-1">
                  <FaStar className="text-green-400" />
                  <span>{data.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* view all button */}
        <div className="flex justify-center">
          <button className="text-center mt-10 cursor-pointer bg-green-500 text-white py-1 px-5 rounded-md hover:bg-green-700 transition duration-300">
            View All Button
          </button>
        </div>
      </div>
    </div>
  </div>  
  )
}

export default TopRated