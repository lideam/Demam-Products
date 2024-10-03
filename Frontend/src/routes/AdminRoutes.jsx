import { div } from "framer-motion/client";
import { Route, Routes } from "react-router-dom";
import { Admin } from "../pages";

export const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Admin />} />
      </Routes>
    </div>
  );
};
