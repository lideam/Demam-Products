import { About } from "./About";
import { Categories } from "./Categories";
import { Featured } from "./Featured";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";

export const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <About />
      <Categories />
      <Footer />
    </div>
  );
};
