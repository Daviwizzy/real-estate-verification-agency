import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Verify Your Property Investments with Verizone</title>
        <meta
          name="description"
          content="Verizone ensures safe property investments with comprehensive legal and ownership checks. Protect your investment with trusted verification services."
        />
        <meta
          name="keywords"
          content="property verification, property investment safety, legal checks, ownership checks, secure property investments, Verizone"
        />
        <meta name="author" content="Verizone Verification Services" />
        <meta
          property="og:title"
          content="Verify Your Property Investments with Verizone"
        />
        <meta
          property="og:description"
          content="Ensure your property investment is safe and secure with Verizone. We provide thorough legal and ownership checks for peace of mind."
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/images/property-verification-preview.jpg"
        />
        <meta property="og:url" content="Your website URL" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
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
