// MainPage.js
import React from "react";
import Projects from "../components/Projects/index";
import Navbar from "../components/Navbar/index";

const Main = () => (
  <main className="text-cyan-300 bg-blue-800 body-font">
    <Navbar />
    <Projects />
  </main>
);

export default Main;
