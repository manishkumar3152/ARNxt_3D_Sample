import React from "react";
import "@google/model-viewer";

export default function ARViewer() {
  // Extract modelUrl from query params
  const query = new URLSearchParams(window.location.search);
  const modelUrl = query.get("modelUrl");

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <model-viewer
        src={modelUrl}
        ar
        ar-modes="scene-viewer quick-look webxr"
        camera-controls
        autoplay
        style={{ width: "100%", height: "100%" }}
      ></model-viewer>
    </div>
  );
}
