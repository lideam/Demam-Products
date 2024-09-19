import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingProgress from "../utils/Loading";
import { Home, ProductDetail, Store } from "../pages";
import { Header, Footer } from "../components";

export const MainRoutes = () => {
  return (
    <div>
      <LoadingProgress />
      <div className="bg-[#f4efe9] min-h-screen max-w-screen overflow-x-hidden">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <div className="mt-32">
            <Routes>
              <Route path="*" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/detail" element={<ProductDetail />} />
            </Routes>
          </div>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};
