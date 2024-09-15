import { ProductCard } from "./ProductCard";

export const Categories = () => {
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
  return (
    <div className="py-8 w-full flex flex-col justify-center items-center">
      <header className="w-full gap-4 font-playfair flex flex-col justify-center items-center">
        <h1 className="text-4xl font-extrabold">Our Store</h1>
        <p>Explore our range of products. </p>
      </header>
      <div className="px-12 py-8 flex gap-12">
        <img
          src="https://images.pexels.com/photos/11403818/pexels-photo-11403818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-[1000px]"
        />
        <div className="flex flex-wrap gap-20">
          {products.map((product, index) => (
            <ProductCard ey={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
