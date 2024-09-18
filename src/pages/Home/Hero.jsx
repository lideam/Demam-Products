import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="mt-6  w-full flex md:flex-row p-10 md:p-0 flex-col justify-end gap-12">
      <div className="md:w-[30rem] max-w-screen relative  md:mt-32">
        <h1 className="text-xl lg:text-[3.5rem] text-[#4a4a4a] font-extrabold font-playfair leading-tight lg:leading-[4rem] relative z-10">
          Experience the Power of Nature with Our Pure, Skin-Loving Cosmetics.
          {/* Sparkling Stars */}
          <motion.span
            className="absolute top-[-10px] right-[-30px] text-yellow-400 text-lg lg:text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: [1, 1.5, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            ✨
          </motion.span>
          <motion.span
            className="absolute bottom-[-10px] left-[-30px] text-yellow-400 text-lg lg:text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: [1, 1.5, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            ✨
          </motion.span>
        </h1>

        <p className="mt-4 md:font-semibold md:text-lg">
          Simple, natural, and effective.
        </p>
        <Link to="/store">
          <button className="border-2 border-clayBrown p-4 mt-12 w-full text-black hover:bg-clayBrown text-xl transition-colors duration-2000 hover:text-white">
            Explore
          </button>
        </Link>
      </div>
      <div>
        <span className="flex justify-center w-full">
          <motion.img
            src="https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-52 h-72 md:w-[600px] md:h-[600px]"
            initial={{ opacity: 0, x: 100, rotate: 0 }} // Start with no rotation
            animate={{ opacity: 1, x: 0, rotate: -6 }} // Rotate by 6 degrees
            transition={{ duration: 1.5 }}
          />
          <motion.img
            src="https://images.pexels.com/photos/10870106/pexels-photo-10870106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-52 h-72 md:w-auto md:h-auto"
            initial={{ opacity: 0, x: -100, rotate: 0 }} // Start with no rotation
            animate={{ opacity: 1, x: 0, rotate: 6 }} // Rotate by 90 degrees
            transition={{ duration: 1.5 }}
          />
        </span>
        <motion.img
          src="https://images.pexels.com/photos/5308633/pexels-photo-5308633.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="md:w-[300px] w-48 md:h-[400px] mt-[-50%] md:mt-[-30%] ml-[25%] md:ml-[35%] z-10"
          initial={{ opacity: 0, y: 100, rotate: 0 }} // Start with no rotation
          animate={{ opacity: 1, y: 0, rotate: 0.1 }} // Rotate by 10 degrees
          transition={{ duration: 1.8 }}
        />
      </div>
    </div>
  );
};
