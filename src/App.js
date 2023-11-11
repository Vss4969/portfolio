import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import AllProjects from "./pages/allprojects";

// import Testimonials from "./components/Testimonials/index";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/allprojects" element={<AllProjects />} />
    </Routes>
  );
}
