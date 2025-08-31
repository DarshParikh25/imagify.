import About from "../components/home/About";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import Navbar from "../components/Navbar";
import ScrollListener from "../utils/ScrollListener";

const Home = () => {
  return (
    <main className="home">
      <ScrollListener />
      <Navbar />
      <Hero />
      <About />
      <Features />
    </main>
  );
};

export default Home;
