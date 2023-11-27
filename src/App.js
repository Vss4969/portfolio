import React from "react";
import Main from "./pages/main";
import AllProjects from "./pages/allprojects";
// import { Route, Routes } from "react-router-dom";

// import Testimonials from "./components/Testimonials/index";
import Route from "./components/Route"

export default function App() {
  return (
    // Create routes for main page and all projects page
    <div>
      {/* <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/allprojects" element={< AllProjects/>} />
      </Routes> */}
      <Route path="/">
        <Main />
      </Route>
      <Route path="/allprojects">
        <AllProjects />
      </Route>
      {/* <Main />
      <AllProjects /> */}
    </div>
  );
}
