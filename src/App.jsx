import React, { useState } from "react";
import "./App.css";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) return alert("Please choose file first!");
    setIsUploading(true);

    const formData = new FormData();
    formData.append("video", selectedFile);

    // console.log(selectedFile);
    fetch("https://9dca-103-82-43-56.ngrok-free.app/uploadvideo", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        // handle response
        console.log(response.status);
        if (response.status === 200) {
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
      {isUploading ? (
        <div className="loader"></div>
      ) : (
        <button style={{ marginTop: "1rem" }} onClick={handleUpload}>
          Upload
        </button>
      )}
    </div>
  );
}

export default App;
