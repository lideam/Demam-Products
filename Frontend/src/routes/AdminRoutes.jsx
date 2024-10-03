import { div } from "framer-motion/client";
import { Route, Routes } from "react-router-dom";
import { Admin, Login } from "../pages";
import { useContext } from "react";
import { AuthContext } from "../context";
import { Loader } from "../utils/Loader";

export const AdminRoutes = () => {
  const { myprofile, loading } = useContext(AuthContext);
  if (loading && !myprofile) {
    return <Loader />;
  }
  return (
    <div>
      <Routes>
        {!myprofile ? (
          <Route path="/" element={<Login />} />
        ) : (
          <Route path="/" element={<Admin />} />
        )}
      </Routes>
    </div>
  );
};
