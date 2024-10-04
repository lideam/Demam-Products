import React, { useContext, useState, useEffect } from "react";
import { DashboardContext } from "../../context/DashboardContext";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import axios from "axios";
import { ProductRow } from "./ProductRow";
import { toast } from "react-hot-toast";
import validator from "validator";

export const ProductTable = () => {
  const { products, setProducts } = useContext(DashboardContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedProducts, setSortedProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [sortDirection, setSortDirection] = useState({ key: "", order: "asc" });

  // State for new product
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    image1Url: "",
    image2Url: "",
    image3Url: "",
  });
  const [showNewProductRow, setShowNewProductRow] = useState(false);

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

  const handleAddProduct = async () => {
    // Validation
    if (
      !newProduct.name ||
      !newProduct.price ||
      !newProduct.category ||
      !newProduct.stock
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Ensure price and stock are numbers
    if (isNaN(newProduct.price) || isNaN(newProduct.stock)) {
      toast.error("Price and Stock must be valid numbers.");
      return;
    }

    // Validate image URLs using validator
    if (
      !validator.isURL(newProduct.image1Url, {
        require_protocol: true,
        protocols: ["https"],
      })
    ) {
      toast.error("Image URL 1 must be a valid HTTPS URL.");
      return;
    }

    if (
      newProduct.image2Url &&
      !validator.isURL(newProduct.image2Url, {
        require_protocol: true,
        protocols: ["https"],
      })
    ) {
      toast.error("Image URL 2 must be a valid HTTPS URL.");
      return;
    }

    if (
      newProduct.image3Url &&
      !validator.isURL(newProduct.image3Url, {
        require_protocol: true,
        protocols: ["https"],
      })
    ) {
      toast.error("Image URL 3 must be a valid HTTPS URL.");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_URL}api/products`,
        newProduct,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setProducts((prev) => [...prev, response.data.product]);
      toast.success("Product added successfully!");
      setNewProduct({
        name: "",
        price: "",
        category: "",
        stock: "",
        image1Url: "",
        image2Url: "",
        image3Url: "",
      });
      setShowNewProductRow(false);
    } catch (error) {
      toast.error("Error adding product. Please try again.");
      console.error("Error adding product:", error);
    }
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

  const handleUpdateProduct = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((p) => (p._id === updatedProduct._id ? updatedProduct : p))
    );
    toast.success("Product updated locally!");
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_REACT_APP_BACKEND_URL}api/products/${id}`
      );
      setProducts((prev) => prev.filter((product) => product._id !== id));
      toast.success("Product deleted successfully!");
    } catch (error) {
      toast.error("Error deleting product. Please try again.");
      console.error("Error deleting product:", error);
    }
  };

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
                onClick={() => setShowNewProductRow((prev) => !prev)}
              >
                Add Product
              </button>
            </div>
          </div>
        </div>

        {showNewProductRow && (
          <div className="p-4">
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                placeholder="Product Name"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
                className="border rounded p-2 w-full"
              />
              <input
                type="number"
                placeholder="Price"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
                className="border rounded p-2 w-full"
              />
              <input
                type="text"
                placeholder="Category"
                value={newProduct.category}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, category: e.target.value })
                }
                className="border rounded p-2 w-full"
              />
              <input
                type="number"
                placeholder="Stock"
                value={newProduct.stock}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, stock: e.target.value })
                }
                className="border rounded p-2 w-full"
              />
            </div>
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                placeholder="Image URL 1"
                value={newProduct.image1Url}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image1Url: e.target.value })
                }
                className="border rounded p-2 w-full"
              />
              <input
                type="text"
                placeholder="Image URL 2 (optional)"
                value={newProduct.image2Url}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image2Url: e.target.value })
                }
                className="border rounded p-2 w-full"
              />
              <input
                type="text"
                placeholder="Image URL 3 (optional)"
                value={newProduct.image3Url}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image3Url: e.target.value })
                }
                className="border rounded p-2 w-full"
              />
            </div>
            <button
              onClick={handleAddProduct}
              className="flex select-none items-center gap-2 rounded bg-green-600 py-2.5 px-4 text-xs font-semibold text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85]"
            >
              Add New Product
            </button>
          </div>
        )}

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
                <ProductRow
                  key={product._id}
                  product={product}
                  handleUpdate={handleUpdateProduct}
                  handleDelete={handleDeleteProduct}
                />
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
