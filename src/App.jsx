import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Trust from "./components/Trust/Trust";
import Why from "./components/Why/Why";
import How from "./components/How/How";
import Explore from "./components/Explore/Explore";
import Mission from "./components/Mission/Mission";
import Footer from "./components/Footer/Footer";
import Mobfooter from "./components/Footer/mob-footer";
import Contact from "./components/contact/Contact";
// import AccordionTransition from "./components/FAQS/Faqs";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Why />
      <How />
      <Explore />
      <Trust />
      <Mission />
      <Explore />
      <Trust />
      <Mission />
      <Contact />
      <Footer />
      <Mobfooter />
    </div>
  );
}

export default App;
