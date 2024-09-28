import { createContext, useState } from "react";
import { toast } from "react-hot-toast";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [saved, setSaved] = useState(() => {
    const savedCart = localStorage.getItem("saved");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (product, q = 1) => {
    const existingProductIndex = cart.findIndex(
      (item) => item._id === product._id
    );

    if (existingProductIndex === -1) {
      const newCart = [...cart, { ...product, quantity: q }];
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

  const addToSave = (product) => {
    const newSaved = [...saved, product];
    setSaved(newSaved);
    localStorage.setItem("saved", JSON.stringify(newSaved));
    toast.success(`${product.name} added to saved!`);
  };

  const removeFromSave = (product) => {
    const newSaved = saved.filter((item) => item._id !== product._id);
    setSaved(newSaved);
    localStorage.setItem("saved", JSON.stringify(newSaved));
    toast.success(`${product.name} removed from saved!`);
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

  const getCart = (product) => {
    return cart.find((item) => item._id === product._id) || null;
  };

  const checkSave = (product) => {
    return saved.some((item) => item._id === product._id);
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
    saved,
    addToSave,
    removeFromSave,
    checkSave,
    getCart,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
