import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brand from "./components/Brand";
import Services from "./components/Services";
import Banner1 from "./components/Banner1";
import Banner2 from "./components/Banner2";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Brand />
      <Services />
      <Banner1 />
      <Banner2 />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
