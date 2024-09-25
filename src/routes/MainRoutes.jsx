import { Suspense, useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LoadingProgress from "../utils/Loading";
import { Cart, Home, ProductDetail, Store } from "../pages";
import { Header, Footer } from "../components";

export const MainRoutes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, [location.pathname]);

  return (
    <div className="bg-home min-h-screen max-w-screen overflow-x-hidden">
      {isLoading ? (
        <LoadingProgress />
      ) : (
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
      )}
    </div>
  );
};
