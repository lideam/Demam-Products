import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast"; // Import toast from react-hot-toast
import { useNavigate } from "react-router-dom"; // Import useNavigate

export const AuthContext = createContext();

const loginUser = async (phoneNumber, password, setUser, navigate) => {
  toast.loading("Logging in...");
  try {
    const res = await axios.post("http://localhost:5000/api/users/login", {
      phoneNumber,
      password,
    });

    if (res.data.success) {
      const { _id, name, token } = res.data.data;

      setUser({
        id: _id,
        name: name,
        phoneNumber: phoneNumber,
        isAuthenticated: true,
        token: token,
      });

      toast.dismiss();
      toast.success("Login successful!");
      navigate("/");
    }
  } catch (error) {
    toast.dismiss();
    toast.error("Login failed. Please try again.");
    console.error("Login error:", error);
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: null,
    name: null,
    phoneNumber: null,
    isAuthenticated: false,
    token: localStorage.getItem("token") || null,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (user.token) {
      localStorage.setItem("token", user.token);
    } else {
      localStorage.removeItem("token");
    }
  }, [user.token]);

  const logout = () => {
    setUser({
      id: null,
      name: null,
      phoneNumber: null,
      isAuthenticated: false,
      token: null,
    });
    localStorage.removeItem("token");
    toast.success("Logged out successfully!");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login: (phoneNumber, password) =>
          loginUser(phoneNumber, password, setUser, navigate),
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
