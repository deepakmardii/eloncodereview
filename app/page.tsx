import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PrimaryFeatures from "./components/PrimaryFeatures";
import CallToAction from "./components/CallToAction";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Faqs from "./components/Faqs";

const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <PrimaryFeatures />
      <CallToAction />
      <Testimonials />
      <Pricing />
      <Faqs />
      <Footer />
    </>
  );
};

export default page;
