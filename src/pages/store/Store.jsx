import { Header } from "./Header";
import { Products } from "./Products";
import { About } from "../Home/About";

export const Store = () => {
  return (
    <div className="px-24 py-12 w-full flex flex-col">
      <Header />
      <Products />
      <About />
    </div>
  );
};
