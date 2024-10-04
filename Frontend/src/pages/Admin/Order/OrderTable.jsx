import React, { useState, useContext } from "react";
import {
  useTable,
  useExpanded,
  useFilters,
  useSortBy,
  usePagination,
} from "react-table";
import { DashboardContext } from "../../../context";

export const OrderTable = () => {
  const { orders } = useContext(DashboardContext);
  const [filterInput, setFilterInput] = useState("");

  const columns = React.useMemo(
    () => [
      {
        Header: "Customer Name",
        accessor: "customerName",
      },
      {
        Header: "Phone Number",
        accessor: "phoneNumber",
      },
      {
        Header: "Total Price",
        accessor: "totalPrice",
      },
      {
        Header: "Status",
        accessor: "status",
      },
    ],
    []
  );

  const data = React.useMemo(() => orders, [orders]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    setFilter,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useFilters,
    useSortBy,
    useExpanded,
    usePagination
  );

  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setFilter("customerName", value);
    setFilterInput(value);
  };

  const handleRowClick = (row) => {
    row.toggleRowExpanded(!row.isExpanded);
    // Collapse other rows
    if (row.isExpanded) {
      row.toggleRowExpanded(false);
    } else {
      // Collapse all other rows
      for (let r of rows) {
        if (r.id !== row.id) {
          r.toggleRowExpanded(false);
        }
      }
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
      <input
        value={filterInput}
        onChange={handleFilterChange}
        placeholder="Search by customer name..."
        className="p-2 mb-4 border rounded"
      />
      <table
        {...getTableProps()}
        className="min-w-full bg-white rounded-lg shadow-lg"
      >
        <thead className="bg-blue-500 text-white">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="p-2 text-left border-b"
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <React.Fragment key={row.id}>
                <tr
                  {...row.getRowProps()}
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => handleRowClick(row)}
                >
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} className="p-2 border-b">
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
                {row.isExpanded ? (
                  <tr>
                    <td colSpan={columns.length} className="p-4 bg-gray-50">
                      <div>
                        <h4 className="font-bold">Ordered Products:</h4>
                        <ul>
                          {row.original.orderItems.map((item) => (
                            <li key={item.product._id}>
                              {item.product.name} - Quantity: {item.quantity} -
                              Price: ${item.price}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </td>
                  </tr>
                ) : null}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
      <div className="mt-4 flex justify-between items-center">
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <div>
          <button
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
            className="text-blue-500 hover:underline mr-2"
          >
            {"<<"}
          </button>
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="text-blue-500 hover:underline mr-2"
          >
            {"<"}
          </button>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="text-blue-500 hover:underline mr-2"
          >
            {">"}
          </button>
          <button
            onClick={() => gotoPage(pageOptions.length - 1)}
            disabled={!canNextPage}
            className="text-blue-500 hover:underline"
          >
            {">>"}
          </button>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
            className="ml-4 border rounded p-1"
          >
            {[10, 20, 30, 40, 50].map((size) => (
              <option key={size} value={size}>
                Show {size}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
