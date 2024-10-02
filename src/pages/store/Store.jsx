import { motion } from "framer-motion";
import { Header } from "./Header";
import { Products } from "./Products";
import { About } from "../Home/About";
import { useContext } from "react";
import { UtilContext } from "../../context";

const fadeInVariant = (direction = "up", delay = 0) => ({
  hidden: { opacity: 0, y: direction === "up" ? 50 : -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut", delay },
  },
});

const Store = () => {
  const { set } = useContext(UtilContext);
  set([
    { label: "Products", id: "hero" },
    { label: "About Us", id: "about" },
    { label: "Contact Us", id: "footer" },
  ]);
  return (
    <div className="lg:px-24 px-2 lg:py-12 w-full flex flex-col">
      <motion.div
        initial="hidden"
        animate="visible"
        id="hero"
        variants={fadeInVariant("down")}
      >
        <Header />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariant("up", 0.2)}
      >
        <Products />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        id="about"
        variants={fadeInVariant("up", 0.4)}
      >
        <About />
      </motion.div>
    </div>
  );
};
export default Store;
