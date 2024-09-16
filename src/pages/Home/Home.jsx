import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { About } from "./About";
import { Categories } from "./Categories";
import { Featured } from "./Featured";
import { Header, Footer } from "../../components";
import { Hero } from "./Hero";

const fadeInVariant = (direction) => ({
  hidden: { opacity: 0, y: direction === "down" ? -50 : 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
});

export const Home = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true });
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [featuredRef, featuredInView] = useInView({ triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true });
  const [categoriesRef, categoriesInView] = useInView({ triggerOnce: true });
  const [footerRef, footerInView] = useInView({ triggerOnce: true });

  return (
    <div className="bg-[#f4efe9] min-h-screen">
      <motion.div
        ref={headerRef}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        variants={fadeInVariant("down")}
      >
        <Header />
      </motion.div>

      <motion.div
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeInVariant("up")}
      >
        <Hero />
      </motion.div>

      <motion.div
        ref={featuredRef}
        initial="hidden"
        animate={featuredInView ? "visible" : "hidden"}
        variants={fadeInVariant("down")}
      >
        <Featured />
      </motion.div>
=
      <motion.div
        ref={aboutRef}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={fadeInVariant("up")}
      >
        <About />
      </motion.div>
=
      <motion.div
        ref={categoriesRef}
        initial="hidden"
        animate={categoriesInView ? "visible" : "hidden"}
        variants={fadeInVariant("down")}
      >
        <Categories />
      </motion.div>=
      <motion.div
        ref={footerRef}
        initial="hidden"
        animate={footerInView ? "visible" : "hidden"}
        variants={fadeInVariant("up")}
      >
        <Footer />
      </motion.div>
    </div>
  );
};
