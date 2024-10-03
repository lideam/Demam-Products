import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { About } from "./About";
import { Categories } from "./Categories";
import { Hero } from "./Hero";
import { useContext, useEffect } from "react";
import { UtilContext } from "../../context";
import Store from "../store/Store";

const fadeInVariant = (direction) => ({
  hidden: { opacity: 0, y: direction === "down" ? -50 : 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
});

const Home = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true });
  const [categoriesRef, categoriesInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [storeRef, storeInView] = useInView({ triggerOnce: true });

  const { set } = useContext(UtilContext);

  useEffect(() => {
    set([
      { label: "Home", id: "hero", type: "scroll" },
      { label: "Our Products", id: "categories", type: "scroll" },
      { label: "Store", id: "store", type: "scroll" },
      { label: "About Us", id: "about", type: "scroll" },
      { label: "Contact Us", id: "footer", type: "scroll" },
    ]);
  }, [set]);

  return (
    <div className="min-h-screen">
      <motion.div
        id="hero"
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeInVariant("up")}
      >
        <Hero heroInView={heroInView} />
      </motion.div>

      <motion.div
        id="about"
        ref={aboutRef}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={fadeInVariant("up")}
      >
        <About />
      </motion.div>

      <motion.div
        id="categories"
        ref={categoriesRef}
        initial="hidden"
        animate={categoriesInView ? "visible" : "hidden"}
        variants={fadeInVariant("down")}
      >
        <Categories />
      </motion.div>

      <motion.div
        id="store"
        ref={storeRef}
        initial="hidden"
        animate={storeInView ? "visible" : "hidden"}
        variants={fadeInVariant("up")}
      >
        <Store />
      </motion.div>
    </div>
  );
};

export default Home;
