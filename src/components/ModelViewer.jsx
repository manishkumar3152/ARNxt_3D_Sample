import React, { useEffect } from "react";
import "@google/model-viewer";

export default function ModelViewer({ modelUrl }) {
  useEffect(() => {
    // Ensure web component is registered
    import("@google/model-viewer");
  }, []);

  return (
    <model-viewer
      src={modelUrl}
      alt="3D Model"
      ar
      ar-modes="scene-viewer quick-look webxr"
      camera-controls
      auto-rotate
      style={{ width: "100%", height: "600px", background: "white" }}
    ></model-viewer>
  );
}
