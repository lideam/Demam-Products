import { createContext, useState, useContext } from "react";

const UtilContext = createContext();

export const UtilProvider = ({ children }) => {
  const [isCartsVisible, setIsCartsVisible] = useState(false);

  const toggleCartsVisibility = () => {
    setIsCartsVisible((prev) => !prev);
  };

  return (
    <UtilContext.Provider value={{ isCartsVisible, toggleCartsVisibility }}>
      {children}
    </UtilContext.Provider>
  );
};

export const useUtilContext = () => {
  return useContext(UtilContext);
};
