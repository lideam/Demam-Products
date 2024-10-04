import React, { useContext, useState, useMemo } from "react";
import { useTable, usePagination, useSortBy, useFilters } from "react-table";
import { DashboardContext } from "../../../context/DashboardContext";

const statusColors = {
  completed: "bg-green-100 text-green-600",
  pending: "bg-yellow-100 text-yellow-600",
  canceled: "bg-red-100 text-red-600",
};

export const OrderTable = () => {
  const { orders } = useContext(DashboardContext);
  const [expandedRowIndex, setExpandedRowIndex] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const data = useMemo(() => orders, [orders]);

  const columns = useMemo(
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
        Cell: ({ value }) => (
          <span className={`p-2 rounded ${statusColors[value]}`}>{value}</span>
        ),
      },
    ],
    []
  );

  const toggleRow = (rowIndex) => {
    setExpandedRowIndex(expandedRowIndex === rowIndex ? null : rowIndex);
  };

  const renderProducts = (orderItems) => {
    return (
      <div className="p-4 border rounded bg-gray-100">
        {orderItems.map((item) => (
          <div key={item.product} className="flex items-center justify-between">
            <img
              src={item.product.image1Url}
              alt={item.product.name}
              className="w-16 h-16 rounded"
            />
            <span>{item.product.name}</span>
            <span>Quantity: {item.quantity}</span>
            <span>Price: ${item.price}</span>
          </div>
        ))}
      </div>
    );
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    setFilter,
    page,
    gotoPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    pageCount,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 10 },
    },
    useFilters,
    useSortBy,
    usePagination
  );

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    setGlobalFilter(e.target.value);
  };

  const handleStatusFilter = (e) => {
    setSelectedStatus(e.target.value);
    setFilter("status", e.target.value);
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search by Customer Name"
          value={searchInput}
          onChange={handleSearchChange}
          className="border p-2 rounded"
        />
        <select
          value={selectedStatus}
          onChange={handleStatusFilter}
          className="border p-2 rounded"
        >
          <option value="">All Statuses</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
          <option value="canceled">Canceled</option>
        </select>
      </div>

      <table
        {...getTableProps()}
        className="w-full text-left border border-gray-300"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="p-4 border-b border-gray-200"
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
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <React.Fragment key={row.id}>
                <tr
                  {...row.getRowProps()}
                  onClick={() => toggleRow(index)}
                  className="cursor-pointer"
                >
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="p-4 border-b border-gray-200"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
                {expandedRowIndex === index && (
                  <tr>
                    <td colSpan={columns.length}>
                      {renderProducts(row.original.orderItems)}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>

      <div className="mt-4 flex justify-between items-center">
        <div>
          <span>
            Page{" "}
            <strong>
              {state.pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
        </div>
        <div>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {"<<"}
          </button>{" "}
          <button onClick={previousPage} disabled={!canPreviousPage}>
            {"<"}
          </button>{" "}
          <button onClick={nextPage} disabled={!canNextPage}>
            {">"}
          </button>{" "}
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </button>{" "}
          <select
            value={state.pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
