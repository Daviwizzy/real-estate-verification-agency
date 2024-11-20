import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Mobfooter from "./components/Footer/mob-footer";

// Lazy imports for non-critical components
import React, { Suspense } from "react";

const About = React.lazy(() => import("./components/About/About"));
const Trust = React.lazy(() => import("./components/Trust/Trust"));
const Why = React.lazy(() => import("./components/Why/Why"));
const How = React.lazy(() => import("./components/How/How"));
const Explore = React.lazy(() => import("./components/Explore/Explore"));
const Mission = React.lazy(() => import("./components/Mission/Mission"));
const Verify = React.lazy(() => import("./components/Verify/Verify"));
const Questions = React.lazy(() => import("./components/Questions/Questions"));
const Testimonials = React.lazy(() =>
  import("./components/Testimonials/Testimonials")
);
const MOBTRUST = React.lazy(() => import("./components/Trust/mobTrust"));
const Contact = React.lazy(() => import("./components/contact/Contact"));

function App() {
  return (
    <div className="general-container">
      <Helmet>
        <title>Verizone</title>
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
      <Suspense fallback={<div>Loading About...</div>}>
        <About />
      </Suspense>
      <Suspense fallback={<div>Loading Why...</div>}>
        <Why />
      </Suspense>
      <Suspense fallback={<div>Loading How...</div>}>
        <How />
      </Suspense>
      <Suspense fallback={<div>Loading Explore...</div>}>
        <Explore />
      </Suspense>
      <Suspense fallback={<div>Loading Trust...</div>}>
        <Trust />
        <MOBTRUST />
      </Suspense>
      <Suspense fallback={<div>Loading Mission...</div>}>
        <Mission />
      </Suspense>
      <Suspense fallback={<div>Loading Testimonials...</div>}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<div>Loading Verify...</div>}>
        <Verify />
      </Suspense>
      <Suspense fallback={<div>Loading Questions...</div>}>
        <Questions />
      </Suspense>
      <Suspense fallback={<div>Loading Contact...</div>}>
        <Contact />
      </Suspense>
      <Footer />
      <Mobfooter />
    </div>
  );
}

export default App;
