import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Breakpoint from "./components/Breakpoint";
import Hero from "./components/Hero";
import Get from "./components/Get";
import Source from "./components/Source";
import Developer from "./components/Developer";
import Footer from "./components/Footer";
import WorkingArrey from "./components/WorkingArrey";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Chapters from "./components/Chapters";
import Loading from "./components/Loading";
import BackToTop from "./components/BackToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useAccordionButton } from "react-bootstrap";

function App() {
  useEffect(() => {
    AOS.init({ once: true, disable: "mobile" });
  }, []);
  return (
    <div className=" overflow-hidden">
      <Breakpoint />
      <Hero />
      <Get />
      <Chapters />
      <WorkingArrey />
      <Source />
      <Developer />
      <Footer />
      <Loading />
      <BackToTop />
    </div>
  );
}

export default App;
