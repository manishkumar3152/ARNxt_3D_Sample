import "@google/model-viewer";

export default function ARViewer() {
  const modelUrl = "/model.glb";     
  const iosModelUrl = "/iosmodel.usdz"; 

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
