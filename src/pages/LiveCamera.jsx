import React, { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import Header from "../components/Header";
import ResultPlates from "../components/ResultPlates";
import axios from "axios";

const LiveCamera = () => {
  const webcamRef = useRef(null);
  const [isWebcamOn, setIsWebcamOn] = useState(false);
  const [detectedPlates, setDetectedPlates] = useState([]);

  const toggleWebcam = () => setIsWebcamOn((prev) => !prev);

  useEffect(() => {
    if (isWebcamOn) {
      const interval = setInterval(() => {
        const imgSrc = captureFrame();
        console.log(imgSrc);
        if (imgSrc) {
          const formData = new FormData();
          formData.append("video", imgSrc);
          axios
            .post(`${import.meta.env.VITE_BACKEND_URL}/detectlive`, formData)
            .then((res) => {
              if (res.status === 200) {
                if (res?.data?.plates?.length) {
                  setDetectedPlates([...detectedPlates, res.data.plates]);
                }
              } else {
                console.error("Something went wrong");
              }
            })
            .catch((err) => {
              console.error(err);
            });
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isWebcamOn]);

  const captureFrame = () => {
    if (!webcamRef.current) return false;
    const imageSrc = webcamRef.current.getScreenshot();
    // console.log(imageSrc);
    return imageSrc;
    // setCurrentFrame(imageSrc);
    // requestAnimationFrame(captureFrame);
  };

  return (
    <div>
      <Header />
      <div className="container p-4 text-center">
        <div className="">
          <button className="btn btn-dark m-4" onClick={toggleWebcam}>
            {isWebcamOn ? "Stop" : "Start"}&nbsp;Live Feed
          </button>
        </div>

        {/* {currentFrame && <img src={currentFrame} alt="current frame" />} */}

        <div className="row">
          <div className="col-md">
            {isWebcamOn ? (
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width="100%"
              />
            ) : (
              ""
            )}
          </div>

          <div className="col-md">
            <ResultPlates detectedPlates={detectedPlates} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveCamera;
