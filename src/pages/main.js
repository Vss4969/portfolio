// MainPage.js
import React from "react";
import { About } from "../components/About/index";
// import Contact from "../components/Contact/index";
import Navbar from "../components/Navbar/index";
import Projects from "../components/Projects/index";
import Skills from "../components/Skills/index";
import Footer from "../components/Footer";

const Main = () => (
  <main className="text-cyan-300 bg-blue-800 body-font">
    <Navbar />
    <About />
    <Projects />
    <Skills />
    <Footer />
  </main>
);

export default Main;
