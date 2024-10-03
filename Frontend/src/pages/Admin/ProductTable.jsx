import React, { useContext, useState, useEffect } from "react";
import { DashboardContext } from "../../context/DashboardContext";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import { useDropzone } from "react-dropzone"; // Import useDropzone from react-dropzone

export const ProductTable = () => {
  const { products } = useContext(DashboardContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedProducts, setSortedProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [sortDirection, setSortDirection] = useState({ key: "", order: "asc" });
  const [editRowId, setEditRowId] = useState(null);
  const [editedProduct, setEditedProduct] = useState({});

  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSortedProducts(filteredProducts);
  }, [searchTerm, products]);

  const handleSort = (key) => {
    const order =
      sortDirection.key === key && sortDirection.order === "asc"
        ? "desc"
        : "asc";

    const sorted = [...sortedProducts].sort((a, b) => {
      if (order === "asc") {
        return a[key] < b[key] ? -1 : 1;
      } else {
        return a[key] > b[key] ? -1 : 1;
      }
    });

    setSortedProducts(sorted);
    setSortDirection({ key, order });
  };

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePrevious = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const handleEditClick = (product) => {
    setEditRowId(product._id);
    setEditedProduct(product);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    // Here you would usually make a call to update the product
    console.log("Updated product:", editedProduct);
    setEditRowId(null);
  };

  // Handle image upload
  const onDrop = (acceptedFiles) => {
    const images = acceptedFiles.map((file) => URL.createObjectURL(file));
    setEditedProduct((prev) => ({
      ...prev,
      images: images.slice(0, 3), // Limit to 3 images
    }));
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*", // Only accept image files
    multiple: true,
  });

  return (
    <div>
      <div className="relative flex flex-col w-full h-full text-slate-700 bg-white shadow-md rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-slate-700 bg-white rounded-none bg-clip-border">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-800">
                Products List
              </h3>
              <p className="text-slate-500">Review each product before edit</p>
            </div>
            <div className="flex flex-col gap-2 shrink-0 sm:flex-row">
              <input
                type="text"
                placeholder="Search Products"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border rounded p-2"
              />
              <button
                className="rounded border border-slate-300 py-2.5 px-3 text-center text-xs font-semibold text-slate-600 transition-all hover:opacity-75"
                type="button"
              >
                View All
              </button>
              <button
                className="flex select-none items-center gap-2 rounded bg-slate-800 py-2.5 px-4 text-xs font-semibold text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85]"
                type="button"
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
        <div className="p-0">
          <table className="w-full mt-4 text-left table-auto min-w-max">
            <thead>
              <tr className="bg-clayBrown text-white">
                <th>
                  <p className="p-4 font-sans text-sm font-normal leading-none">
                    Image
                  </p>
                </th>
                <th
                  onClick={() => handleSort("name")}
                  className="p-4 transition-colors cursor-pointer border-y border-slate-200"
                >
                  <p className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none">
                    Product Name (click)
                    {sortDirection.key === "name" &&
                      (sortDirection.order === "asc" ? (
                        <FaSortUp />
                      ) : (
                        <FaSortDown />
                      ))}
                  </p>
                </th>
                <th
                  onClick={() => handleSort("price")}
                  className="p-4 transition-colors cursor-pointer border-y border-slate-200"
                >
                  <p className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none">
                    Price (click)
                    {sortDirection.key === "price" &&
                      (sortDirection.order === "asc" ? (
                        <FaSortUp />
                      ) : (
                        <FaSortDown />
                      ))}
                  </p>
                </th>
                <th
                  onClick={() => handleSort("category")}
                  className="p-4 transition-colors cursor-pointer border-y border-slate-200"
                >
                  <p className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none">
                    Category (click)
                    {sortDirection.key === "category" &&
                      (sortDirection.order === "asc" ? (
                        <FaSortUp />
                      ) : (
                        <FaSortDown />
                      ))}
                  </p>
                </th>
                <th
                  onClick={() => handleSort("stock")}
                  className="p-4 transition-colors cursor-pointer border-y border-slate-200"
                >
                  <p className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none">
                    Stock (click)
                    {sortDirection.key === "stock" &&
                      (sortDirection.order === "asc" ? (
                        <FaSortUp />
                      ) : (
                        <FaSortDown />
                      ))}
                  </p>
                </th>
                <th>
                  <p className="p-4 font-sans text-sm font-normal leading-none">
                    Actions
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((product) => (
                <tr key={product._id}>
                  <td className="p-4 border-b flex justify-center border-slate-200">
                    {editRowId === product._id ? (
                      <div
                        {...getRootProps()}
                        className="border-dashed border-2 border-gray-400 p-4 rounded-lg text-center"
                      >
                        <input {...getInputProps()} />
                        <p>Drag & drop images here, or click to select</p>
                        {editedProduct.images &&
                          editedProduct.images.map((img, index) => (
                            <img
                              key={index}
                              src={img}
                              alt={`Image ${index + 1}`}
                              className="w-16 h-16 mt-2"
                            />
                          ))}
                      </div>
                    ) : (
                      <img
                        src={product.image1Url}
                        alt=""
                        className="w-32 h-32 rounded-xl"
                      />
                    )}
                  </td>
                  {editRowId === product._id ? (
                    <>
                      <td className="p-4 border-b border-slate-200">
                        <input
                          name="name"
                          value={editedProduct.name}
                          onChange={handleInputChange}
                          className="border rounded p-2 w-full"
                        />
                      </td>
                      <td className="p-4 border-b border-slate-200">
                        <input
                          name="price"
                          value={editedProduct.price}
                          onChange={handleInputChange}
                          className="border rounded p-2 w-full"
                        />
                      </td>
                      <td className="p-4 border-b border-slate-200">
                        <input
                          name="category"
                          value={editedProduct.category}
                          onChange={handleInputChange}
                          className="border rounded p-2 w-full"
                        />
                      </td>
                      <td className="p-4 border-b border-slate-200">
                        <input
                          name="stock"
                          value={editedProduct.stock}
                          onChange={handleInputChange}
                          className="border rounded p-2 w-full"
                        />
                      </td>
                      <td className="p-4 border-b border-slate-200 ">
                        <button
                          className="fa fa-save p-2 mr-2 rounded-md text-white hover:bg-blue-700 bg-blue-500"
                          onClick={handleSaveClick}
                        >
                          Save
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="p-4 border-b border-slate-200">
                        {product.name}
                      </td>
                      <td className="p-4 border-b border-slate-200">
                        ${product.price}
                      </td>
                      <td className="p-4 border-b border-slate-200">
                        {product.category}
                      </td>
                      <td className="p-4 border-b border-slate-200">
                        {product.stock}
                      </td>
                      <td className="p-4 border-b border-slate-200 ">
                        <button
                          className="fa fa-edit p-2 mr-2 rounded-md text-white hover:bg-green-700 bg-green-500"
                          onClick={() => handleEditClick(product)}
                        ></button>
                        <button className="fa fa-trash p-2 ml-2 rounded-md text-white hover:bg-red-700 bg-red-500"></button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between p-3">
          <p className="block text-sm ">
            Page {currentPage} of {totalPages}
          </p>
          <div className="flex gap-1">
            <button
              onClick={handlePrevious}
              className="rounded border border-slate-300 py-2.5 px-3 text-center text-xs font-semibold text-slate-600 transition-all hover:opacity-75"
              disabled={currentPage === 1}
              type="button"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="rounded border border-slate-300 py-2.5 px-3 text-center text-xs font-semibold text-slate-600 transition-all hover:opacity-75"
              disabled={currentPage === totalPages}
              type="button"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
