import { div } from "framer-motion/client";
import { Route, Routes } from "react-router-dom";
import { Admin } from "../pages";
import { useContext } from "react";
import { AuthContext } from "../context";

export const AdminRoutes = () => {
  const {myprofile} = useContext(AuthContext)
  return (
    <div>
      <Routes>
        {myprofile ? (
          <Route path="/" element={<Admin />} />
        ) : (
          <Route path="/" element={<Admin />} />
        )}
      </Routes>
    </div>
  );
};
