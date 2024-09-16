import { Header } from "./Header";
import { Products } from "./Products";

export const Store = () => {
  return (
    <div className="p-12 w-full flex flex-col">
      <Header />
      <Products />
    </div>
  );
};
