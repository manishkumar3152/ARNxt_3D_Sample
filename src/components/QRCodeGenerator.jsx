
import QRCode from "qrcode.react";

export default function QRCodeGenerator({ modelUrl }) {
  // ✅ QR points to ARViewer page with modelUrl in query param
  const viewerUrl = `https://ar-assignment-eta.vercel.app/ar-viewer?modelUrl=${encodeURIComponent(modelUrl)}`;

  return (
    <div className="flex flex-col items-center space-y-4">
      <p>Scan to view in AR:</p>
      <QRCode value={viewerUrl} size={200} />
      <p className="text-sm">Scan this QR code with your mobile to place the model in your room.</p>
    </div>
  );
}
