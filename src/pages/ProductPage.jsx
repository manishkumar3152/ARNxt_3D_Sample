import React, { useState } from "react";
import ModelViewer from "../components/ModelViewer";
import QRCodeGenerator from "../components/QRCodeGenerator";

const product = {
  name: "Single Chair",
  price: 500,
  brand: "VIMANI",
  dimensions: "24in x 22in x 30in",
  modelUrl:
    "https://arnxtmodelstest.s3.ap-south-1.amazonaws.com/1720504495942_Royaloak%20Venice%20Italian%20Fabric%20Sofa%201S.glb",
};

export default function ProductPage() {
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="w-[70%] h-[90vh] mx-auto my-auto p-6 flex flex-col md:flex-row gap-6 shadow-lg rounded-lg bg-white relative">
      {/* Left: Model preview */}
      <div className="w-full md:w-[70%] bg-blue-100 rounded-lg flex items-center justify-center">
        <ModelViewer modelUrl={product.modelUrl} />
      </div>

      {/* Right: Info */}
      <div className="w-full md:w-[30%] space-y-4">
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="text-lg font-semibold">₹{product.price}</p>
        <p className="text-sm">Brand: {product.brand}</p>
        <p className="font-semibold">Dimensions:</p>
        <p>{product.dimensions}</p>

        <div className="space-y-2">
          <button
            onClick={() => setShowQR(true)}
            className="w-full py-2 bg-gray-800 text-white rounded flex items-center justify-center gap-2"
          >
            <span>📱</span> View In Your Room
          </button>
        </div>
      </div>

      {/* QR Code Modal */}
      {showQR && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative text-center max-w-sm w-full">
            {/* Close Button */}
            <button
              onClick={() => setShowQR(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-lg"
            >
              ✕
            </button>
            <h3 className="mb-4 text-lg font-semibold">Scan to View in Your Room</h3>

            {/* QR Code → links to AR viewer page */}
            <QRCodeGenerator url={`${window.location.origin}/ar-viewer?modelUrl=${encodeURIComponent(product.modelUrl)}`} />
          </div>
        </div>
      )}
    </div>
  );
}
