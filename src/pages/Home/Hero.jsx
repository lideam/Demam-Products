import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="mt-6 w-full flex flex-col lg:flex-row p-10 lg:p-0 justify-end gap-12">
      <div className="lg:w-[30rem] max-w-screen lg:mt-32">
        <h1 className="text-2xl lg:text-[3.5rem] text-[#4a4a4a] font-extrabold font-playfair leading-tight lg:leading-[4rem]">
          Experience the Power of Nature with Our Pure, Skin-Loving Cosmetics.
        </h1>

        <p className="mt-4 lg:font-semibold lg:text-lg">
          Simple, natural, and effective.
        </p>
        <Link to="/store">
          <button className="border-2 border-clayBrown p-4 mt-12 w-full text-black hover:bg-clayBrown text-xl transition-colors duration-2000 hover:text-white">
            Explore
          </button>
        </Link>
      </div>
      <div className="relative">
        <span className="flex justify-center w-full">
          <span className="w-52 h-72 lg:w-[600px] lg:h-[600px] transform lg:rotate-0 rotate-[-10deg]">
            <motion.img
              src="https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              initial={{ opacity: 0, x: 100, rotate: 6 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1.5 }}
            />
          </span>
          <span className="w-52 h-72 lg:w-auto lg:h-auto transform lg:rotate-0 rotate-[10deg]">
            <motion.img
              src="https://images.pexels.com/photos/10870106/pexels-photo-10870106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full"
              initial={{ opacity: 0, x: -100, rotate: -6 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1.5 }}
            />
          </span>
        </span>
        <motion.img
          src="https://images.pexels.com/photos/5308633/pexels-photo-5308633.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="absolute lg:w-[300px] w-40 lg:h-[400px] mt-[-50%] lg:mt-[-30%] ml-[25%] lg:ml-[35%] z-100"
          initial={{ opacity: 0, y: 100, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1.8 }}
        />
      </div>
    </div>
  );
};
