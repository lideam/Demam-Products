import { useState } from "react";

export const ProductDetail = () => {
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

  return (
    <div className="my-8 mx-12 flex justify-around gap-12">
      <div className="flex gap-2">
        <div className="flex flex-col gap-4">
          {Object.values(images).map((i, index) => (
            <img
              src={i.url}
              key={index}
              className={`flex-shrink-0 w-80 h-40 p-2 cursor-pointer ${
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
      <div>
        <header>Organic Cotton T-Shirt</header>
        <ul>
          <li>Clothing</li>
          <li>Men’s Apparel</li>
          <li>Sustainable Fashion</li>
          <li>Eco-Friendly Products</li>
        </ul>
        <p>
          Crafted from 100% organic cotton, this t-shirt offers a soft,
          breathable fit for all-day comfort. The classic crew neck design is
          both stylish and versatile, perfect for casual wear or layering.
          Available in a range of earth-tone colors, it’s made with
          sustainability in mind, making it an ideal choice for eco-conscious
          shoppers.
        </p>
        <b>$29.99</b>
        <div>
          <input type="number" placeholder="Quantity" />
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};
