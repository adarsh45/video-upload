import React from "react";
import "./landing.css";
import Header from "../components/Header";

function Landing() {
  return (
    <div className="landing">
      <Header />
      <div className="">
        <div className="hero-section text-center d-flex flex-column justify-content-center align-items-center">
          <h1 className="p-4">Automatic Number Plate Recognition System</h1>
          <a href="/upload" className="btn btn-dark m-4">
            Detect Number Plates
          </a>
        </div>

        <div className="row container p-4" style={{ margin: "auto" }}>
          <div className="col-md text-center d-flex align-items-center justify-content-center">
            <h2 className="topic">Introduction</h2>
          </div>
          <div className="col-md p-4 " style={{ textAlign: "justify" }}>
            The Automatic Number Plate Detection project is a fascinating
            intersection of computer vision and machine learning technologies
            that promises to revolutionize the way we manage traffic and enhance
            security measures in various public places. By using cameras and
            sensors to capture and analyze license plate information from
            vehicles in real-time, this project offers a cutting-edge solution
            for parking management, toll booth systems, traffic surveillance,
            and law enforcement. In this project, we will explore the workings
            of this ANPR system and its applications in various industries. We
            will discuss the technology behind ANPR, how it works, and its
            benefits and limitations. Additionally, we will delve into some
            real-world examples of ANPR implementation and highlight the
            potential impact it could have on traffic management and security
            measures.
          </div>
        </div>

        <div
          className="row container p-4 text-center"
          style={{ margin: "auto" }}
        >
          <div className="col-md p-4" style={{ textAlign: "justify" }}>
            The Automatic Number Plate Detection project is a cutting-edge
            system that uses computer vision and machine learning techniques to
            detect and recognize license plates from vehicles in real-time. This
            technology has a wide range of applications, including parking
            management, toll booth systems, traffic surveillance, and law
            enforcement. The system uses cameras and sensors to capture images
            of license plates, and then uses a trained machine learning model to
            extract and analyze the plate information. The extracted information
            can then be used to automate various tasks, such as tracking
            vehicles, identifying stolen cars, and issuing traffic violations.
            The ANPR system provides an efficient and reliable way to manage
            traffic and enhance security measures in various public places.
          </div>

          <div className="col-md text-center d-flex align-items-center justify-content-center">
            <h2 className="topic">Objective</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
