import React from "react";

const ResultPlates = ({ detectedPlates = [] }) => {
  return (
    <div>
      <h3>Result</h3>

      {detectedPlates.length
        ? detectedPlates.map((plateNumber) => (
            <div className="plate" key={plateNumber}>
              {plateNumber}
            </div>
          ))
        : ""}
    </div>
  );
};

export default ResultPlates;
