import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import FeaturedArt from "./Components/FeaturedArt";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import JoinUs from "./Components/JoinUs";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import "../src/App.css";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Product />
      <JoinUs />
      <FeaturedArt />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
