import { MainRoutes } from "./routes/MainRoutes";
import { UtilProvider, AuthProvider, AuthContext } from "./context";
import { Routes, Route } from "react-router-dom";
import { Auth } from "./pages";
import { useContext } from "react";

export default function App() {
  // const { user } = useContext(AuthContext);
  // console.log(user);
  return (
    <AuthProvider>
      <UtilProvider>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<MainRoutes />} />
        </Routes>
      </UtilProvider>
    </AuthProvider>
  );
}
