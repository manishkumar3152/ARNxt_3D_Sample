import React from "react";
import "@google/model-viewer";

export default function ARViewer() {
  const modelUrl =
    "https://arnxtmodelstest.s3.ap-south-1.amazonaws.com/1720504495942_Royaloak%20Venice%20Italian%20Fabric%20Sofa%201S.glb";

  const iosModelUrl =
    "https://modelviewer.dev/shared-assets/models/Astronaut.usdz";

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-blue-100 relative"
      style={{ overflow: "hidden" }}
    >
      <model-viewer
        src={modelUrl}
        ios-src={iosModelUrl}
        alt="3D Sofa Model"
        ar
        ar-modes="scene-viewer quick-look webxr"
        camera-controls
        autoplay
        shadow-intensity="1"
        exposure="1"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#e0f2ff",
        }}
      >
        {/* Custom AR Button */}
        <button
          slot="ar-button"
          style={{
            position: "absolute",
            bottom: "24px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#fff",
            border: "none",
            color: "#000",
            fontSize: "16px",
            fontWeight: "600",
            padding: "12px 24px",
            borderRadius: "10px",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.25)",
            cursor: "pointer",
            zIndex: "999",
          }}
        >
          📱 View in your space
        </button>
      </model-viewer>
    </div>
  );
}
