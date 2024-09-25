import Select from "react-select";
import { ProductCard } from "../Home/ProductCard";
import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";

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
      outline: "none",
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

  const { data, loading, error } = useFetch("api/products");

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;

  
  const totalPages = Math.ceil((data?.length || 0) / productsPerPage);

  
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data?.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <a
          key={i}
          href="#"
          onClick={() => setCurrentPage(i)}
          className={`px-6 py-2 border border-[#A0522D] transition-colors duration-200 ${
            currentPage === i
              ? "bg-[#A0522D] text-white"
              : "bg-home text-[#2E8B57]"
          }`}
        >
          {i}
        </a>
      );
    }
    return buttons;
  };

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
        {!loading &&
          currentProducts &&
          currentProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
      <div className="flex items-center justify-center my-12">
        <nav className="inline-flex shadow-md">
          <a
            href="#"
            onClick={handlePreviousPage}
            className={`px-6 py-2 border border-[#A0522D] transition-colors duration-200 ${
              currentPage === 1
                ? "cursor-not-allowed"
                : "bg-[#A0522D] text-white"
            }`}
          >
            Previous
          </a>

          {renderPaginationButtons()}

          <a
            href="#"
            onClick={handleNextPage}
            className={`px-6 py-2 border border-[#A0522D] transition-colors duration-200 ${
              currentPage === totalPages
                ? "cursor-not-allowed"
                : "bg-[#A0522D] text-white"
            }`}
          >
            Next
          </a>
        </nav>
      </div>
    </div>
  );
};
