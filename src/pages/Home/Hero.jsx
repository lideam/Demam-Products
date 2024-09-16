import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="mt-6 w-full flex gap-12">
      <div>
        <span className="flex">
          <motion.img
            src="https://images.pexels.com/photos/10870106/pexels-photo-10870106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-auto"
            initial={{ opacity: 0, x: -100 }} // Start invisible and 100px to the left
            animate={{ opacity: 1, x: 0 }} // Fade in and slide into view
            transition={{ duration: 1.2 }}
          />
          <motion.img
            src="https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-[600px] h-[600px]"
            initial={{ opacity: 0, x: 100 }} // Start invisible and 100px to the right
            animate={{ opacity: 1, x: 0 }} // Fade in and slide into view
            transition={{ duration: 1.5 }}
          />
        </span>
        <motion.img
          src="https://images.pexels.com/photos/5308633/pexels-photo-5308633.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="w-[300px] h-[400px] mt-[-30%] ml-[35%] z-100"
          initial={{ opacity: 0, y: 100 }} // Start invisible and 100px below
          animate={{ opacity: 1, y: 0 }} // Fade in and slide into view
          transition={{ duration: 1.8 }}
        />
      </div>
      <div className="w-[30rem] mt-32">
        <h1 className="text-[3.5rem] text-[#4a4a4a] font-extrabold font-playfair">
          Experience the Power of Nature with Our Pure, Skin-Loving Cosmetics.
        </h1>
        <p className="font-semibold text-lg">Simple, natural, and effective.</p>
        <Link to="/item">
          <button className="border-2 border-clayBrown p-4 mt-12 w-full text-black hover:bg-clayBrown text-xl transition-colors duration-2000 hover:text-white">
            Explore
          </button>
        </Link>
      </div>
    </div>
  );
};
