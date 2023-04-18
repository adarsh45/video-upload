import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [detectedPlates, setDetectedPlates] = useState([]);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) return alert("Please choose file first!");
    setIsUploading(true);

    const formData = new FormData();
    formData.append("video", selectedFile);

    // console.log(selectedFile);
    axios
      .post("https://9dca-103-82-43-56.ngrok-free.app/uploadvideo", formData)
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
    <div className="container">
      <div>
        <label htmlFor="videos" className="drop-container">
          <span className="drop-title">Drop files here</span>
          or
          <input
            type="file"
            id="vidoes"
            accept="*/*"
            required
            onChange={handleFileSelect}
          />
        </label>
        <div
          style={{
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {isUploading ? (
            <div className="loader"></div>
          ) : (
            <button style={{ marginTop: "1rem" }} onClick={handleUpload}>
              Upload
            </button>
          )}
          <div>
            <button style={{ marginTop: "1rem" }}>Detect Camera</button>
          </div>
        </div>
      </div>

      <div>
        {detectedPlates.length
          ? detectedPlates.map((plateNumber) => (
              <div className="plate" key={plateNumber}>
                {plateNumber}
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}

export default App;
