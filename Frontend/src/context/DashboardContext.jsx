import React, { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { AuthContext } from "./AuthContext"; 

const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL; 

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const { authTokens, myprofile } = useContext(AuthContext); 
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${backendUrl}api/products`);
        setProducts(response.data.data);
      } catch (error) {
        toast.error("Error fetching products");
      }
    };

    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${backendUrl}api/order`, {
          headers: {
            Authorization: `Bearer ${authTokens.access}`, // Include token
          },
        });
        setOrders(response.data.data);
      } catch (error) {
        toast.error("Error fetching orders");
      }
    };

    const fetchAdmins = async () => {
      try {
        const response = await axios.get(`${backendUrl}api/admins`, {
          headers: {
            Authorization: `Bearer ${authTokens.access}`, // Include token
          },
        });
        setAdmins(response.data.data);
      } catch (error) {
        toast.error("Error fetching admins");
      }
    };

    const fetchData = async () => {
      if (myprofile) {
        setLoading(true);
        await Promise.all([fetchProducts(), fetchOrders(), fetchAdmins()]);
        setLoading(false);
      }
    };

    fetchData();
  }, [authTokens, myprofile]); // Dependencies include authTokens and myprofile

  const value = {
    products,
    orders,
    admins,
    loading,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};
