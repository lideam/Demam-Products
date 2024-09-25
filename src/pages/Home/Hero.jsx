import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import one from "../../assets/bella/1.jpg";

export const Hero = () => {
  return (
    <div className="relative bg-transparent bg-opacity-20 backdrop-blur-2xl rounded-lg shadow-2xl p-6 m-20">
      <div className="lg:mx-32 mx-8 flex lg:flex-row flex-col-reverse justify-center items-center">
        <div className="z-10 ">
          <h1 className="text-[#4a4a4a] text-2xl lg:text-7xl font-playfair font-extrabold">
            Experience the Power of Nature with Our Pure, Skin-Loving Cosmetics.
          </h1>

          <p className="m-2 font-extralight text-xl">
            Simple, natural, and effective.
          </p>
          <Link to="/">
            <button className="border-2 border-clayBrown p-4 m-4 w-full text-black hover:bg-clayBrown text-xl transition-colors duration-2000 hover:text-white">
              Explore
            </button>
          </Link>
        </div>
        <img src={one} className="w-56 lg:w-[600px] ml-20 col-span-3" alt="" />
      </div>
    </div>
  );
};
