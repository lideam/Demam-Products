import { createContext, useState } from "react";
import { toast } from "react-hot-toast";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (product) => {
    if (!checkCart(product)) {
      const newCart = [...cart, product];
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
      toast.success(`${product.name} added to cart!`); // Show success toast
    } else {
      toast.error(`${product.name} is already in the cart!`); // If already in the cart
    }
  };

  const removeFromCart = (product) => {
    const newCart = cart.filter((item) => item._id !== product._id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    toast.success(`${product.name} removed from cart!`); // Show success toast
  };

  const checkCart = (product) => {
    return cart.some((item) => item._id === product._id);
  };

  const value = {
    cart,
    addToCart,
    checkCart,
    removeFromCart,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
