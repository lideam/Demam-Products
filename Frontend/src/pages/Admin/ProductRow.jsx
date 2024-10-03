import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { toast } from "react-hot-toast";

export const ProductRow = ({ product, handleUpdate }) => {
  const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({
    ...product,
    image1Url: product.image1Url,
    image2Url: product.image2Url,
    image3Url: product.image3Url,
  });

  const [images, setImages] = useState([]);

  const onDrop = (acceptedFiles) => {
    const selectedImages = acceptedFiles
      .slice(0, 3)
      .map((file) => URL.createObjectURL(file));
    setImages(selectedImages);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveClick = async () => {
    try {
      const formData = new FormData();
      const updatedProduct = { ...editedProduct };

      if (images.length > 0) {
        images.forEach((image, index) => {
          formData.append(`image${index + 1}`, image);
        });
      }

      formData.append("name", updatedProduct.name);
      formData.append("description", updatedProduct.description);
      formData.append("price", updatedProduct.price);
      formData.append("category", updatedProduct.category);
      formData.append("stock", updatedProduct.stock);

      const response = await axios.put(
        `${backendUrl}api/products/${product._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      handleUpdate(response.data.product);
      toast.success("Product updated successfully!");
    } catch (error) {
      toast.error("Error updating product. Please try again.");
      console.error("Error updating product:", error);
    }
    setIsEditing(false);
  };

  return (
    <>
      <tr>
        <td className="p-4 border-b flex justify-center border-slate-200">
          {isEditing ? (
            <div
              {...getRootProps()}
              className="border-dashed border-2 border-gray-400 p-4 rounded-lg text-center"
            >
              <input {...getInputProps()} />
              <p>Drag & drop images here, or click to select (up to 3)</p>
              <div></div>
              {images.length > 0 ? (
                <div className="flex justify-between">
                  {images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Image ${index + 1}`}
                      className="w-20 h-20 mt-2"
                    />
                  ))}
                </div>
              ) : (
                <div className="flex justify-between">
                  {product.image1Url && (
                    <img
                      src={product.image1Url}
                      alt="Image 1"
                      className="w-20 h-20 mt-2"
                    />
                  )}
                  {product.image2Url && (
                    <img
                      src={product.image2Url}
                      alt="Image 2"
                      className="w-20 h-20 mt-2"
                    />
                  )}
                  {product.image3Url && (
                    <img
                      src={product.image3Url}
                      alt="Image 3"
                      className="w-20 h-20 mt-2"
                    />
                  )}
                </div>
              )}
            </div>
          ) : (
            <>
              {product.image1Url && (
                <img
                  src={product.image1Url}
                  alt="Image 1"
                  className="w-32 h-32 rounded-xl"
                />
              )}
            </>
          )}
        </td>
        {isEditing ? (
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
                type="number"
                min="0"
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
                type="number"
                min="1"
                name="stock"
                value={editedProduct.stock}
                onChange={handleInputChange}
                className="border rounded p-2 w-full"
              />
            </td>
            <td className="p-4 border-b border-slate-200 ">
              <button
                className="p-2 mr-2 rounded-md text-white hover:bg-clayBrown bg-clayBrown"
                onClick={handleSaveClick}
              >
                <i className="fa fa-save"></i> Save
              </button>
              <button
                className="fa fa-times p-2 mr-2 rounded-md text-white hover:bg-red-700 bg-red-500"
                onClick={() => setIsEditing(false)}
              ></button>
            </td>
          </>
        ) : (
          <>
            <td className="p-4 border-b border-slate-200">{product.name}</td>
            <td className="p-4 border-b border-slate-200">{product.price}</td>
            <td className="p-4 border-b border-slate-200">
              {product.category}
            </td>
            <td className="p-4 border-b border-slate-200">{product.stock}</td>
            <td className="p-4 border-b border-slate-200 ">
              <button
                className="fa fa-edit p-2 mr-2 rounded-md text-white hover:bg-green-700 bg-green-500"
                onClick={() => setIsEditing(true)}
              ></button>
              <button
                className="fa fa-trash p-2 ml-2 rounded-md text-white hover:bg-red-700 bg-red-500"
                // onClick={() => handleDeleteClick(product._id)}
              ></button>
            </td>
          </>
        )}
      </tr>
      {isEditing && (
        <tr key={product._id}>
          <td className="text-center text-xl text-clayBrown">
            Product Description
          </td>
          <td colSpan={5}>
            <textarea
              name="description"
              value={editedProduct.description || ""} // Ensure it's controlled
              onChange={handleInputChange}
              className="outline-none border border-clayBrown w-full p-2"
            />
          </td>
        </tr>
      )}
    </>
  );
};
