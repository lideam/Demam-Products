import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [side, setSide] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to smoothly scroll to a section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setSide(false); // Close sidebar on mobile if open
    }
  };

  // Effect to handle scroll position and toggle fixed nav
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        // Adjust scroll threshold as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="font-playfair fixed z-[999] bg-sandyBeige w-full p-4 border-b border-gray-500">
      {!isScrolled && <div className="w-full text-[#4a4a4a] flex flex-wrap items-center justify-between">
        <span>
          <i
            className="fa-solid md:hidden fa-bars"
            onClick={() => setSide(true)}
          ></i>
        </span>
        <Link to="/" className="text-3xl font-extrabold cursor-pointer">
          Demam Product
        </Link>
        <div className="flex gap-2 cursor-pointer text-xl">
          <Link to="/detail" className="fa fa-user"></Link>
          <i className="fa fa-search"></i>
          <i className="fa fa-shopping-bag"></i>
        </div>
      </div>}

      {/* Fixed nav spans when scrolling */}
      <div
        className={`w-full hidden md:flex text-xl justify-center gap-12 text-base cursor-pointer ${
          isScrolled ? "fixed top-0 bg-sandyBeige z-50" : ""
        }`}
      >
        <span onClick={() => scrollToSection("hero")}>Home</span>
        <span onClick={() => scrollToSection("featured")}>Featured</span>
        <span onClick={() => scrollToSection("categories")}>Our Products</span>
        <span onClick={() => scrollToSection("about")}>About Us</span>
        <span onClick={() => scrollToSection("footer")}>Contact Us</span>
      </div>

      {/* Sidebar for mobile */}
      <AnimatePresence>
        {side && (
          <motion.div
            className="w-full h-full text-2xl fixed bg-sandyBeige top-0 left-0 z-[9999] flex flex-col justify-center items-center p-4"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.img
              src="https://i.pinimg.com/564x/04/25/4f/04254f1eb2a4cb2097e54d582806743c.jpg"
              alt="Sidebar Image"
              className="w-48 mb-8 transform"
              initial={{ rotate: 90 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />

            <motion.span
              whileHover={{ scale: 1.1, color: "#f97316" }}
              className="mb-4 cursor-pointer hover:underline"
              onClick={() => scrollToSection("hero")}
            >
              Face Products
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.1, color: "#f97316" }}
              className="mb-4 cursor-pointer hover:underline"
              onClick={() => scrollToSection("featured")}
            >
              Hair Products
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.1, color: "#f97316" }}
              className="mb-4 cursor-pointer hover:underline"
              onClick={() => scrollToSection("categories")}
            >
              All Products
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.1, color: "#f97316" }}
              className="mb-4 cursor-pointer hover:underline"
              onClick={() => scrollToSection("about")}
            >
              Accessories
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.1, color: "#f97316" }}
              className="mb-4 cursor-pointer hover:underline"
              onClick={() => scrollToSection("about")}
            >
              About Us
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.1, color: "#f97316" }}
              className="mb-4 cursor-pointer hover:underline"
              onClick={() => scrollToSection("categories")}
            >
              Contact Us
            </motion.span>

            <motion.i
              className="fa-regular fa-circle-xmark absolute top-10 right-10 text-3xl cursor-pointer"
              whileHover={{ scale: 1.3, color: "#dc2626" }}
              onClick={() => setSide(false)}
            ></motion.i>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
