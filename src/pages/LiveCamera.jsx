import React, { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import Header from "../components/Header";
import ResultPlates from "../components/ResultPlates";

const LiveCamera = () => {
  const webcamRef = useRef(null);
  const [currentFrame, setCurrentFrame] = useState(null);
  const [isWebcamOn, setIsWebcamOn] = useState(false);
  const [detectedPlates, setDetectedPlates] = useState(["TN07CM4123"]);

  const toggleWebcam = () => setIsWebcamOn((prev) => !prev);

  useEffect(() => {
    if (isWebcamOn) {
      const interval = setInterval(() => {
        if (!captureFrame()) clearInterval(interval);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isWebcamOn]);

  const captureFrame = () => {
    if (!isWebcamOn) {
      alert("Please turn on the webcam!");
      return false;
    }
    // const imageSrc = webcamRef.current.getScreenshot();
    console.log("imageSrc");
    return true;
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
                width={640}
                height={480}
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
