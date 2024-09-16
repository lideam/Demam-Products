import { ProductCard } from "./ProductCard";

export const Featured = () => {
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
  ];

  return (
    <div className="my-20 pl-12 font-playfair">
      <div className="w-full flex justify-between pr-12">
        <h1 className="text-xl">Featured Products</h1>
        <p className=" underline cursor-pointer">View Store</p>
      </div>
      <div className="mt-8 ml-20 w-[95%] overflow-x-hidden">
        <div className="h-[600px] overflow-hidden w-[4000px] flex gap-8 overflow-x-scroll">
          {products.map((product, index) => (
            <ProductCard ey={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
