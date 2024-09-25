import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import one from "../../assets/bella/1.jpg";

export const Hero = ({ heroInView }) => {
  return (
    <>
      <motion.div
        className="w-96 h-96 bg-clayBrown rounded-full absolute left-5 top-[50vh]"
        initial={{ scale: 0 }}
        animate={heroInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      />
      <motion.div
        className="w-72 h-72 bg-sandyBeige rounded-full absolute right-10"
        initial={{ scale: 0 }}
        animate={heroInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100, delay: 0.2 }}
      />
      <motion.div
        className="relative bg-transparent bg-opacity-20 h-[80vh] backdrop-blur-xl rounded-lg shadow-2xl p-6 m-20"
        initial={{ opacity: 0, y: 50 }}
        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        <div className="z-10 mt-[15vh] px-[10vh] flex flex-col justify-center items-center ">
          <motion.h1
            className="text-[#4a4a4a] text-2xl lg:text-8xl font-playfair font-extrabold text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Experience the Power of Nature with Our Pure, Skin-Loving Cosmetics.
          </motion.h1>

          <motion.p
            className="m-2 font-extralight text-xl"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Simple, natural, and effective.
          </motion.p>
          <Link to="/">
            <motion.button
              className="border-2 border-clayBrown p-4 m-4 w-full text-black hover:bg-clayBrown text-xl transition-colors duration-2000 hover:text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Explore
            </motion.button>
          </Link>
        </div>
        <motion.div
          className="w-80 h-80 rounded-full overflow-hidden p-5 bg-clayBrown absolute bottom-[-5vh] right-[-5vh]"
          initial={{ scale: 0 }}
          animate={heroInView ? { scale: 1 } : { scale: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
            delay: 0.5,
          }}
        >
          <img src={one} className="rounded-full" alt="" />
        </motion.div>
      </motion.div>
    </>
  );
};
