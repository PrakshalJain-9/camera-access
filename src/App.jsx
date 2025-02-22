import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);
  const [facingMode, setFacingMode] = useState("user"); // "user" for front, "environment" for back

  const capture = () => {
    const screenshot = webcamRef.current.getScreenshot();
    setImage(screenshot);
  };

  const switchCamera = () => {
    setFacingMode((prev) => (prev === "user" ? "environment" : "user"));
  };

  const videoConstraints = {
    facingMode: facingMode,
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">React Webcam Example</h1>
      <Webcam
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        className="rounded-lg shadow-lg"
      />
      <div className="mt-4 flex gap-4">
        <button
          onClick={capture}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Capture Photo
        </button>
        <button
          onClick={switchCamera}
          className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
        >
          Switch Camera
        </button>
      </div>
      {image && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Captured Image:</h2>
          <img src={image} alt="Captured" className="rounded-lg shadow-md" />
        </div>
      )}
    </div>
  );
};

export default WebcamCapture;
