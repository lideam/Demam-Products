import { MainRoutes } from "./routes/MainRoutes";
import { UtilProvider } from "./context";
import { Routes, Route } from "react-router-dom";
import { Auth } from "./pages";

export default function App() {
  return (
    <UtilProvider>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<MainRoutes />} />
      </Routes>
    </UtilProvider>
  );
}
