import { MainRoutes } from "./routes/MainRoutes";
import { UtilProvider } from "./context";

export default function App() {
  return (
    <UtilProvider>
      <MainRoutes />
    </UtilProvider>
  );
}
