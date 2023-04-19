import React from "react";
import "./landing.css";
import Header from "../components/Header";

function Landing() {
  return (
    <div className="landing">
      <Header />
      <div className="hero-section">
        <h2 className="text-center p-4">
          Automatic Number Plate Recognition System
        </h2>
      </div>
    </div>
  );
}

export default Landing;
