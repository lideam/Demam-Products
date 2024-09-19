import { Link } from "react-router-dom";
import { useRef } from "react";
import { ProductCard } from "./ProductCard";

export const Featured = () => {
  const scrollRef = useRef(null);
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
    {
      name: "Exfoliating Scrub",
      price: 27.99,
      category: "Skincare",
      image:
        "https://images.pexels.com/photos/8128062/pexels-photo-8128062.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Deep Cleanse Face Mask",
      price: 22.99,
      category: "Skincare",
      image:
        "https://images.pexels.com/photos/3373730/pexels-photo-3373730.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Moisturizing Hand Cream",
      price: 18.99,
      category: "Body Care",
      image:
        "https://images.pexels.com/photos/4699180/pexels-photo-4699180.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Refreshing Facial Mist",
      price: 16.99,
      category: "Skincare",
      image:
        "https://images.pexels.com/photos/6808150/pexels-photo-6808150.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Anti-Aging Night Cream",
      price: 39.99,
      category: "Skincare",
      image:
        "https://images.pexels.com/photos/5128075/pexels-photo-5128075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Calming Lip Balm",
      price: 12.99,
      category: "Lip Care",
      image:
        "https://images.pexels.com/photos/8128071/pexels-photo-8128071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Calming Lip Balm",
      price: 12.99,
      category: "Lip Care",
      image:
        "https://images.pexels.com/photos/8128071/pexels-photo-8128071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Calming Lip Balm",
      price: 12.99,
      category: "Lip Care",
      image:
        "https://images.pexels.com/photos/8128071/pexels-photo-8128071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Calming Lip Balm",
      price: 12.99,
      category: "Lip Care",
      image:
        "https://images.pexels.com/photos/8128071/pexels-photo-8128071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Calming Lip Balm",
      price: 12.99,
      category: "Lip Care",
      image:
        "https://images.pexels.com/photos/8128071/pexels-photo-8128071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Calming Lip Balm",
      price: 12.99,
      category: "Lip Care",
      image:
        "https://images.pexels.com/photos/8128071/pexels-photo-8128071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Calming Lip Balm",
      price: 12.99,
      category: "Lip Care",
      image:
        "https://images.pexels.com/photos/8128071/pexels-photo-8128071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Calming Lip Balm",
      price: 12.99,
      category: "Lip Care",
      image:
        "https://images.pexels.com/photos/8128071/pexels-photo-8128071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Calming Lip Balm",
      price: 12.99,
      category: "Lip Care",
      image:
        "https://images.pexels.com/photos/8128071/pexels-photo-8128071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Calming Lip Balm",
      price: 12.99,
      category: "Lip Care",
      image:
        "https://images.pexels.com/photos/8128071/pexels-photo-8128071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Calming Lip Balm",
      price: 12.99,
      category: "Lip Care",
      image:
        "https://images.pexels.com/photos/8128071/pexels-photo-8128071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="my-20 pl-12 font-playfair">
      <div className="w-full flex justify-between pr-12">
        <h1 className="text-xl">Featured Products</h1>
        <Link to='/store' className="underline cursor-pointer">View Store</Link>
      </div>
      <div className="relative mt-8  md:ml-20 w-[95%]">
        <button
          onClick={() => scroll("left")}
          className="absolute bottom-[-10px] left-[35%] transform -translate-y-1/2 bg-transparent  border border-clayBrown p-4 rounded-full shadow-md z-10"
        >
          &lt;
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute bottom-[-10px] right-[35%] transform -translate-y-1/2 bg-transparent border border-clayBrown p-4 rounded-full shadow-md z-10"
        >
          &gt;
        </button>
        <div
          ref={scrollRef}
          className="h-[600px] overflow-hidden flex gap-8 scroll-smooth"
        >
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
