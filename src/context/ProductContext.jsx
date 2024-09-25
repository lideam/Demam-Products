import { createContext, useState } from "react";
import { toast } from "react-hot-toast";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item._id === product._id
    );

    if (existingProductIndex === -1) {
      const newCart = [...cart, { ...product, quantity: 1 }];
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
      toast.success(`${product.name} added to cart!`);
    } else {
      const newCart = cart.map((item, index) =>
        index === existingProductIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
      toast.success(`Increased quantity of ${product.name}!`);
    }
  };

  const removeFromCart = (product) => {
    const newCart = cart.filter((item) => item._id !== product._id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    toast.success(`${product.name} removed from cart!`);
  };

  const checkCart = (product) => {
    return cart.some((item) => item._id === product._id);
  };

  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === productId ? { ...item, quantity } : item
      )
    );
  };

  const value = {
    cart,
    addToCart,
    checkCart,
    removeFromCart,
    updateQuantity,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
