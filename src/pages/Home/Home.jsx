import { Featured } from "./Featured";
import { Header } from "./Header"
import { Hero } from "./Hero";

export const Home = () => {
  return (
    <div className="bg-sandyBeige min-h-screen">
      <Header />
      <Hero />
      <Featured />
    </div>
  );
}
