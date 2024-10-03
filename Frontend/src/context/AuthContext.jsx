import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );
  const [myprofile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (authTokens && user) {
      const id = user.user_id;
      const getProfile = async () => {
        setLoading(true);
        try {
          const token = authTokens ? authTokens.access : null;
          const response = await axios.get(`${backendUrl}api/parents`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setProfile(response.data[0]);
        } catch (error) {
          toast.error("Error fetching profile data");
        } finally {
          setLoading(false);
        }
      };
      getProfile();
    }
  }, [authTokens, user]);

  let loginUser = async (ph, pass) => {
    try {
      setLoading(true);
      let response = await axios.post(
        `${backendUrl}auth/jwt/create`,
        {
          phone: ph,
          password: pass,
        },
        { timeout: 20000 }
      );

      if (response.status === 200) {
        const data = response.data;
        setAuthTokens(data);
        setUser(jwtDecode(data.access));
        localStorage.setItem("authTokens", JSON.stringify(data));
        toast.success("Logged in successfully");
        navigate("/");
      } else {
        toast.error(response.data.detail);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  let updateToken = async () => {
    if (authTokens) {
      try {
        let response = await axios.post(
          `${backendUrl}auth/jwt/refresh/`,
          {
            refresh: authTokens?.refresh,
          },
          { timeout: 20000 }
        );

        if (response.status === 200) {
          const data = response.data;
          setAuthTokens(data);
          setUser(jwtDecode(data.access));
          localStorage.setItem("authTokens", JSON.stringify(data));
        } else {
          logoutUser();
        }
      } catch (error) {
        toast.error(error.message);
        logoutUser();
      }
    } else {
      logoutUser();
    }
  };

  let logoutUser = () => {
    setLoading(true);
    setUser(null);
    setAuthTokens(null);
    localStorage.removeItem("authTokens");
    toast.success("Logged out successfully");
    setLoading(false);
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, 1000 * 60 * 60 * 24);

    return () => clearInterval(interval);
  }, [authTokens]);

  const value = {
    user,
    loginUser,
    logoutUser,
    myprofile,
    authTokens,
    loading,
    setLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
