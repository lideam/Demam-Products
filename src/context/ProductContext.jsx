import { createContext, useState } from "react";

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
    }
  };

  const removeFromCart = (product) => {
    const newCart = cart.filter((item) => item !== product);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const checkCart = (product) => {
    return cart.some((item) => item === product); 
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
