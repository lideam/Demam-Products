export const ProductCard = ({ product }) => {
  return (
    <div className="relative font-playfai w-[300px] h-[500px] flex-shrink-0">
      <img src={product.image} className="w-[300px] h-[400px]" alt="" />
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-xl">{product.name}</h2>
        <span className="flex justify-between w-full">
          <p className="text-xl">${product.price}</p>
          <p>{product.category}</p>
        </span>
        <button className="border-2 border-clayBrown p-1 w-full text-black hover:bg-clayBrown text-xl transition-colors duration-2000 hover:text-white">
          Add to cart
        </button>
        <div className="absolute top-4 right-4">
          <button className="relative p-3 rounded-full bg-dark-green text-white hover:bg-light-green transition-colors duration-300">
            <i className="fa-solid fa-bookmark text-xl"></i>
            <span className="absolute inset-0 bg-dark-green opacity-40 rounded-full"></span>
          </button>
        </div>
      </div>
    </div>
  );
};
