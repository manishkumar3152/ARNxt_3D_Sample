import React from "react";
import "@google/model-viewer";

export default function ARViewer() {
  const modelUrl =
    "https://arnxtmodelstest.s3.ap-south-1.amazonaws.com/1720504495942_Royaloak%20Venice%20Italian%20Fabric%20Sofa%201S.glb";

  const iosModelUrl =
    "https://modelviewer.dev/shared-assets/models/Astronaut.usdz";

  return (
    <div className="w-full h-screen flex items-center justify-center bg-blue-100 relative overflow-hidden">
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
        style={{ width: "100%", height: "100%" }}
      >
        {/* ✅ Tailwind Custom AR Button — Fixed at Top */}
        <button
          slot="ar-button"
          className="
            fixed top-5 left-1/2 -translate-x-1/2
            bg-white text-black font-semibold
            px-6 py-3 rounded-xl shadow-md
            hover:bg-gray-100 active:scale-95
            transition-all duration-200 z-[999]
          "
        >
          📱 View in your space
        </button>
      </model-viewer>
    </div>
  );
}
