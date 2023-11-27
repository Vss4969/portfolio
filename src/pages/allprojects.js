// MainPage.js
import React from "react";
import Projects from "../components/Projects/index";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer";

const AllProjects = () => (
  <main className="text-cyan-300 bg-blue-800 body-font">
    <Navbar />
    <Projects />
    <Footer />
  </main>
);

export default AllProjects;
