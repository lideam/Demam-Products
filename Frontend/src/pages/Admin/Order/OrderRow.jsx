import React from "react";

export const OrderRow = ({ order, renderProducts, handleToggleRow }) => {
  return (
    <React.Fragment>
      <tr
        {...order.getRowProps()}
        className="cursor-pointer"
        onClick={handleToggleRow}
      >
        {order.cells.map((cell) => (
          <td {...cell.getCellProps()} className="p-4 border-b border-gray-200">
            {cell.render("Cell")}
          </td>
        ))}
      </tr>
      {order.original.isExpanded && (
        <tr>
          <td colSpan={order.cells.length}>
            {renderProducts(order.original.orderItems)}
          </td>
        </tr>
      )}
    </React.Fragment>
  );
};

