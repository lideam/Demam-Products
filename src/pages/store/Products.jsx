import Select from "react-select";
import { ProductCard } from "../Home/ProductCard";
import { useFetch } from "../../hooks/useFetch";

export const Products = () => {
  const options = [
    { value: "all", label: "All" },
    { value: "women", label: "Women" },
    { value: "men", label: "Men" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "transparent",
      borderColor: "#A0522D",
      padding: "10px",
      textAlign: "center",
      outLine: "none",
    }),
    option: (provided, { isFocused }) => ({
      ...provided,
      backgroundColor: isFocused ? "rgba(0, 0, 0, 0.1)" : "transparent",
      color: "#000",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "transparent",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#000",
    }),
  };

  const { data, loading, error } = useFetch(
    "http://localhost:5000/api/products"
  );

  console.log(data, loading, error);

  return (
    <div className="my-8 font-playfair">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-3xl">Our Products</h1>
        <Select
          options={options}
          styles={customStyles}
          defaultValue={options[0]}
          isSearchable={false}
        />
      </div>
      <div className="m-4 flex flex-wrap gap-12 items-center justify-center">
        {/* {products.map((product, index) => (
          <ProductCard key={index} product={product} id={index} />
        ))} */}
      </div>
      <div className="flex items-center justify-center my-12">
        <nav className="inline-flex shadow-md">
          <a
            href="#"
            className="px-6 py-2 bg-[#A0522D] text-white border border-[#A0522D] hover:bg-[#8B4513] transition-colors duration-200"
          >
            Previous
          </a>

          <a
            href="#"
            className="px-6 py-2 bg-home text-[#2E8B57] border border-[#A0522D]  transition-colors duration-200"
          >
            1
          </a>

          <a
            href="#"
            className="px-6 py-2 bg-home text-[#2E8B57] border border-[#A0522D]  transition-colors duration-200"
          >
            2
          </a>

          <a
            href="#"
            className="px-6 py-2 bg-home text-[#2E8B57] border border-[#A0522D]  transition-colors duration-200"
          >
            3
          </a>

          <a
            href="#"
            className="px-6 py-2 bg-[#A0522D] text-white border border-[#A0522D] hover:bg-[#8B4513] transition-colors duration-200"
          >
            Next
          </a>
        </nav>
      </div>
    </div>
  );
};
