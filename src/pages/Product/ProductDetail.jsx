import { useContext, useState } from "react";
import { Featured } from "../Home/Featured";
import { useFetch } from "../../hooks/";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context";
const ProductDetail = () => {
  const [image, setImage] = useState([
    1,
    "https://imgs.search.brave.com/V4PHzJCCbTx1cSKAtvrBASPRmozfMkHI5yUJxhoJIuU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGFnaXJsdXNhLmNv/bS9jZG4vc2hvcC9w/cm9kdWN0cy9MQUdf/cHJvX3ByaW1lcl9H/RUIxOTZfMzUweC5q/cGc",
  ]);

  const images = {
    1: {
      id: 1,
      url: "https://imgs.search.brave.com/V4PHzJCCbTx1cSKAtvrBASPRmozfMkHI5yUJxhoJIuU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGFnaXJsdXNhLmNv/bS9jZG4vc2hvcC9w/cm9kdWN0cy9MQUdf/cHJvX3ByaW1lcl9H/RUIxOTZfMzUweC5q/cGc",
    },
    2: {
      id: 2,
      url: "https://imgs.search.brave.com/gm_tR0EDe3WHH8OG3ToBtoWicxntR5FVvuePShtmSLE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGFnaXJsdXNhLmNv/bS9jZG4vc2hvcC9w/cm9kdWN0cy9MQUdf/cHJvX3ByaW1lcl9H/RUIxOTdfMzUweC5q/cGc",
    },
  };
  const { id } = useParams();
  const { data, loading, error } = useFetch(`api/products/${id}`);
  const { addToCart, removeFromCart, checkCart } = useContext(ProductContext);
  console.log(data);
  return (
    <>
      <div className="my-8 mx-4 lg:mx-20 flex flex-row justify-around gap-12">
        <div className="flex gap-2 flex-row">
          <div className="flex lg:flex-col flex-row gap-4">
            {Object.values(images).map((i, index) => (
              <img
                src={i.url}
                key={index}
                className={`flex-shrink-0 w-40 lg:w-80 lg:h-40 p-2 cursor-pointer ${
                  image[0] == i.id && "border-4 border-clayBrown"
                }`}
                onClick={() => setImage([i.id, i.url])}
              />
            ))}
          </div>
          <div>
            <img
              src={image[1]}
              alt=""
              className=" flex-shrink-0 w-[1000px] h-[600px]"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 font-playfair">
          <header className="text-4xl font-bold text-clayBrown">
            {data.name}
          </header>
          <ul className="flex gap-4 text-gray-500 cursor-pointer">
            <li>{data.category}</li>
          </ul>
          <p className="text-xl ml-4 w-[80%]">{data.description}</p>
          <b className="text-xl lg:text-4xl text-clayBrown">${data.price}</b>
          <div className="flex flex-wrap gap-12">
            <input
              type="number"
              value={1}
              className="border-2 border-clayBrown p-4  text-clayBrown outline-none text-xl transition-colors duration-2000 "
            />
            <button className="border-2 hover:border-clayBrown p-4 hover:text-black bg-clayBrown hover:bg-transparent text-xl transition-colors duration-2000 text-white">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <Featured />
    </>
  );
};

export default ProductDetail;
