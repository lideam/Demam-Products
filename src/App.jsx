import { MainRoutes } from "./routes/MainRoutes";
import { ProductProvider, UtilProvider } from "./context";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <ProductProvider>
        <UtilProvider>
          <Routes>
            {/* <Route path="/auth" element={<Auth />} /> */}
            <Route path="*" element={<MainRoutes />} />
          </Routes>
        </UtilProvider>
      </ProductProvider>
    </Router>
  );
}
