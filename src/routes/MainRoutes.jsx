import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingProgress from "../utils/Loading";
import { Home, Store } from "../pages";

export const MainRoutes = () => {
  return (
    <div>
      <LoadingProgress />
      <div className="min-h-screen">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/item" element={<Home />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};
