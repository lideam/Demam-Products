import { Header } from "./Header";
import { Filter } from "./Filter";
import { List } from "./List";
import { Break } from "./Break";
import { Featured } from "./Featured";
import { useState, useEffect } from "react";
import axios from "axios";

export const Home = () => {
  const [loadProducts, setLoadProducts] = useState(true);
  const [products, setProducts] = useState({});

  const getProducts = async () => {
    setLoadProducts(true);
    const { data } = await axios.get("http://localhost:5000/api/products");
    setProducts(data);
    setLoadProducts(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  return (
    <div className="flex flex-col gap-8">
      <Header />
      <Filter />
      {!loadProducts && <List products={products} />}
      <Break />
      <Featured />
      <section className=" dark:bg-gray-800 lg:py-12 lg:flex lg:justify-center">
        <div className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
          <div className="lg:w-1/2">
            <div
              className="h-64 bg-cover lg:h-full"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/208052/pexels-photo-208052.jpeg?auto=compress&cs=tinysrgb&w=600')",
              }}
            ></div>
          </div>

          <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Elevate Your Everyday<span className="text-blue-500"> Style</span>
            </h2>

            <p className="mt-4 text-gray-500 dark:text-gray-300">
              Shop the essentials that make every day a little more beautiful.
              From skincare must-haves to chic accessories, Bella Cosmo Shop has
              everything you need to shine.
            </p>

            <div className="inline-flex w-full mt-6 sm:w-auto">
              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
              >
                Start Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
