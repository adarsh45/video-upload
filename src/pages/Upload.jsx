import React, { useState } from "react";
import "./upload.css";
import axios from "axios";
import Header from "../components/Header";
import { isImage, isVideo } from "../utils/functions";
import ResultPlates from "../components/ResultPlates";

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [fileType, setFileType] = useState("");
  const [detectedPlates, setDetectedPlates] = useState([]);
  const [url, setURL] = useState("");

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
    if (isVideo(event.target.files[0].name)) {
      setFileType("video");
    } else if (isImage(event.target.files[0].name)) {
      setFileType("image");
    }

    const objectUrl = URL.createObjectURL(event.target.files[0]);
    setURL(objectUrl);
  };

  const handleUpload = () => {
    if (!selectedFile) return alert("Please choose file first!");
    setIsUploading(true);

    const formData = new FormData();
    formData.append("video", selectedFile);

    // console.log(selectedFile);
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/uploadvideo`, formData)
      .then((response) => {
        // handle response
        console.log(response);
        if (response.status === 200) {
          setDetectedPlates(response?.data?.plates);
          alert("Success!");
        } else {
          alert("Something went wrong!");
        }
      })
      .catch((error) => {
        // handle error
        alert("Something went wrong!");
        console.error(error);
      })
      .finally(() => {
        setIsUploading(false);
        setSelectedFile(null);
      });
  };

  return (
    <div className="">
      <Header />
      <div className="container p-4">
        <div>
          <label htmlFor="videos" className="drop-container">
            <span className="drop-title">Drop files here</span>
            or
            <input
              type="file"
              id="vidoes"
              accept="image/*,video/*"
              required
              onChange={handleFileSelect}
            />
          </label>
          <div className="text-center">
            {isUploading ? (
              <button className="btn btn-dark mt-4">
                <div className="spinner-border text-light" role="status"></div>
              </button>
            ) : (
              <button className="btn btn-dark mt-4" onClick={handleUpload}>
                Upload
              </button>
            )}
          </div>
        </div>

        <div className="row m-4">
          <div className="text-center col-md">
            <h3>Preview</h3>
            {fileType === "video" ? (
              <video controls src={url} style={{ width: "100%" }} muted></video>
            ) : fileType === "image" ? (
              <img src={url} style={{ width: "100%" }} />
            ) : (
              ""
            )}
          </div>

          <div className="col-md text-center">
            <ResultPlates detectedPlates={detectedPlates} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
