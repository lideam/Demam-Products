import { ProductCard } from "./ProductCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Categories = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const products = [
    {
      name: "Revitalizing Face Cream",
      price: 34.99,
      category: "Skincare",
      image:
        "https://images.pexels.com/photos/11751106/pexels-photo-11751106.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Hydrating Facial Serum",
      price: 29.99,
      category: "Skincare",
      image:
        "https://images.pexels.com/photos/5517064/pexels-photo-5517064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Nourishing Body Lotion",
      price: 24.99,
      category: "Body Care",
      image:
        "https://images.pexels.com/photos/12352238/pexels-photo-12352238.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Soothing Eye Cream",
      price: 19.99,
      category: "Skincare",
      image:
        "https://images.pexels.com/photos/12035707/pexels-photo-12035707.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const imageVariants = {
    initial: { opacity: 0, y: 50, scale: 0.8, rotate: 0 },
    animate: (custom) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: custom.rotate,
      transition: {
        delay: custom.delay,
        duration: 0.8,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="py-8 w-full flex flex-col justify-center items-center">
      <header className="w-full gap-4 font-playfair flex flex-col justify-center items-center">
        <h1 className="text-4xl font-extrabold">Our Store</h1>
        <p>Explore our range of products. </p>
      </header>

      <div
        className="pl-12 py-8 flex flex-col-reverse md:grid md:grid-cols-4 gap-12 w-full justify-center items-center"
        ref={ref}
      >
        <div className="relative w-full md:col-span-2 h-[800px]">
          <motion.img
            src="https://i.pinimg.com/564x/98/d3/51/98d3513ffd2ef661090226965ec59929.jpg"
            alt=""
            className="absolute md:w-[500px] w-56 md:top-[-100px] transform rotate-6"
            custom={{ rotate: 6, delay: 0.2 }}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            variants={imageVariants}
          />
          <motion.img
            src="https://i.pinimg.com/564x/14/91/8c/14918c17bb3cc6596c072cc64d7b06a6.jpg"
            alt=""
            className="absolute md:w-[500px] w-56 md:top-[-100px] right-0 transform rotate-[-10deg]"
            custom={{ rotate: -10, delay: 0.6 }}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            variants={imageVariants}
          />
          <motion.img
            src="https://i.pinimg.com/564x/e0/ab/22/e0ab229d9a80a28d6e01a800406f885f.jpg"
            alt=""
            className="absolute md:w-[300px] w-40 bottom-48 md:bottom-[-100px] right-0 transform rotate-[10deg]"
            custom={{ rotate: 10, delay: 1.8 }}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            variants={imageVariants}
          />
          <motion.img
            src="https://i.pinimg.com/564x/0e/40/e7/0e40e755c308e227045f9cfef3a241fa.jpg"
            alt=""
            className="absolute md:w-[300px] w-40 bottom-48 md:bottom-[-100px] left-0 transform rotate-[-10deg]"
            custom={{ rotate: -10, delay: 1.4 }}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            variants={imageVariants}
          />
          <motion.img
            src="https://i.pinimg.com/564x/c6/f0/95/c6f0953371da594d35c2d9a99f3c673f.jpg"
            alt=""
            className="absolute md:w-[300px] w-40 bottom-48 md:bottom-0 left-[30%]"
            custom={{ rotate: 0, delay: 1.0 }}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            variants={imageVariants}
          />
        </div>

        <div className="md:col-span-2 md:grid md:grid-cols-2 flex flex-wrap gap-8 items-center">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
