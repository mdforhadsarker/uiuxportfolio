import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ResidentStylistCaseStudy from "./pages/ResidentStylistCaseStudy.jsx";
import ExceedICTCaseStudy from "./pages/ExceedICTCaseStudy";

const App = () => {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<Home />} />

      {/* Case Study Page */}
      <Route path="/resident-stylist" element={<ResidentStylistCaseStudy />} />
      <Route path="/exceedict" element={<ExceedICTCaseStudy />} />

      {/* Optional: 404 page */}
      <Route
        path="*"
        element={<div className="p-10 text-center">404 Not Found</div>}
      />
    </Routes>
  );
};

export default App;
