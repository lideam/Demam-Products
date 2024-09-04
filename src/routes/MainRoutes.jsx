import { Routes, Route } from "react-router-dom";
import { Home } from "../pages";
import { Footer, NavBar } from "../components";

export const MainRoutes = () => {
  return (
    <div>
      <NavBar />
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8 gap-8 flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
