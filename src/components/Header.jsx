export const Header = () => {
  return (
    <div className="font-playfair flex flex-col gap-4 w-full p-4 border-b border-gray-500">
      <div className="w-full text-[#4a4a4a] flex flex-wrap items-center justify-between">
        <span></span>
        <h1 className="text-3xl font-extrabold cursor-pointer">SOFT BEAUTY</h1>
        <div className="flex gap-2 cursor-pointer text-xl">
          <i className="fa fa-user"></i>
          <i className="fa fa-search"></i>
          <i className="fa fa-shopping-bag"></i>
        </div>
      </div>
      <div className="w-full  flex justify-center gap-12 text-base cursor-pointer">
        <span>Men Products</span>
        <span>Women Products</span>
        <span>Children Products</span>
        <span>All Products</span>
      </div>
    </div>
  );
};
