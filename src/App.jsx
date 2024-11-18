import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import Verify from "./components/Verify/Verify";
import Questions from "./components/Questions/Questions";
import Testimonials from "./components/Testimonials/Testimonials";
import MOBTRUST from "./components/Trust/mobTrust";

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
      <MOBTRUST />
      <Mission />
      <Testimonials />
      <Verify />
      <Questions />
      <Contact />
      <Footer />
      <Mobfooter />
    </div>
  );
}

export default App;
