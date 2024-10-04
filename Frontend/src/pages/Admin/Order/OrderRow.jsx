// OrderRow.js
import React from "react";

export const OrderRow = ({ order }) => {
    console.log(order);
  return (
    <tr>
      <td className="p-4 border-b border-slate-200">
        <img
          src={order.product.image1Url}
          alt="Product Image"
          className="w-32 h-32 rounded-xl"
        />
      </td>
      <td className="p-4 border-b border-slate-200">{order.product.name}</td>
      <td className="p-4 border-b border-slate-200">{order.quantity}</td>
      <td className="p-4 border-b border-slate-200">{order.totalPrice}</td>
      <td className="p-4 border-b border-slate-200">
        <button
          className="fa fa-trash p-2 rounded-md text-white hover:bg-red-700 bg-red-500"
        />
      </td>
    </tr>
  );
};
