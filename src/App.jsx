import { MainRoutes } from "./routes/MainRoutes";
import { ProductProvider } from "./context";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <ProductProvider>
          <Routes>
            {/* <Route path="/auth" element={<Auth />} /> */}
            <Route path="*" element={<MainRoutes />} />
          </Routes>
      </ProductProvider>
    </Router>
  );
}
