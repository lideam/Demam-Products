import { MainRoutes } from "./routes/MainRoutes";
import { UtilProvider, AuthProvider, AuthContext } from "./context";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <UtilProvider>
          <Routes>
            {/* <Route path="/auth" element={<Auth />} /> */}
            <Route path="*" element={<MainRoutes />} />
          </Routes>
        </UtilProvider>
      </AuthProvider>
    </Router>
  );
}
