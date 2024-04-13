import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Body from "../components/Body";
import Programs from "../components/Programs";
import Whyus from "../components/Whyus";
import Plans from "../components/Plans";
import Testimonials from "../components/Testimonials";
function Home() {
  return (
    <>
      <Navbar />
      <Body />
      <Programs />
      <Whyus />
      <Plans />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
