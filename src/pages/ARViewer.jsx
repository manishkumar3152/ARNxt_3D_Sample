
import "@google/model-viewer";

export default function ARViewer() {
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
        shadow-intensity="1"
        style={{ width: "100%", height: "100%" }}
      >
        <button
          slot="ar-button"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-lg shadow-lg text-black font-semibold"
        >
          📱 View in your space
        </button>
      </model-viewer>
    </div>
  );
}
