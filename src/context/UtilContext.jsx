import { createContext, useState, useContext } from "react";

export const UtilContext = createContext();

export const UtilProvider = ({ children }) => {
  const [links, setLinks] = useState([
    { label: "Home", id: "hero" },
    { label: "Featured", id: "featured" },
    { label: "Our Products", id: "categories" },
    { label: "About Us", id: "about" },
    { label: "Contact Us", id: "footer" },
  ]);

  return (
    <UtilContext.Provider value={{ links, setLinks }}>
      {children}
    </UtilContext.Provider>
  );
};

