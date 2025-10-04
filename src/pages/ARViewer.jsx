import "@google/model-viewer";

export default function ARViewer() {
  // const query = new URLSearchParams(window.location.search);
  const modelUrl = "https://arnxtmodelstest.s3.ap-south-1.amazonaws.com/1720504495942_Royaloak%20Venice%20Italian%20Fabric%20Sofa%201S.glb";
  

  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <model-viewer
        src={modelUrl}
        ar
        ar-modes="scene-viewer quick-look webxr"
        camera-controls
        autoplay
        shadow-intensity="1"
        style={{ width: "100%", height: "100%" }}
      >
       
      </model-viewer>
    </div>
  );
}
