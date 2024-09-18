import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="font-playfair flex flex-col gap-4 w-full p-4 border-b border-gray-500">
      <div className="w-full text-[#4a4a4a] flex flex-wrap items-center justify-between">
        <span></span>
        <Link to="/" className="text-3xl font-extrabold cursor-pointer">
          Demam Product
        </Link>
        <div className="flex gap-2 cursor-pointer text-xl">
          <Link to='/detail' className="fa fa-user"></Link>
          <i className="fa fa-search"></i>
          <i className="fa fa-shopping-bag"></i>
        </div>
      </div>
      <div className="w-full  flex justify-center gap-12 text-base cursor-pointer">
        <span>Face Products</span>
        <span>Hair Products</span>
        <span>All Products</span>
        <span>Accessories</span>
        <span>About Us</span>
        <span>Contact Us</span>
       
      </div>
    </div>
  );
};
