import { createContext, useState, useContext } from "react";

export const UtilContext = createContext();

export const UtilProvider = ({ children }) => {
  const [links, setLinks] = useState([
    { label: "Home", id: "hero", type: "scroll" },
    { label: "Featured", id: "featured", type: "scroll" },
    { label: "Our Products", id: "categories", type: "scroll" },
    { label: "About Us", id: "about", type: "scroll" },
    { label: "Store", path: "/store", type: "route" },
    { label: "Contact Us", id: "footer", type: "scroll" },
  ]);
  const set = (list) => {
    setLinks(list);
  };
  return (
    <UtilContext.Provider value={{ links, set }}>
      {children}
    </UtilContext.Provider>
  );
};
