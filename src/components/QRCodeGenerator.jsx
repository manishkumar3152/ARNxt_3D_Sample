
import {QRCodeSVG} from "qrcode.react";
export default function QRCodeGenerator() {
  const viewerUrl = `https://ar-nxt-3-d-sample.vercel.app/ar-viewer`;

  return (
    <div className="flex flex-col items-center space-y-4">
      <p>Scan to view in AR:</p>
      <QRCodeSVG value={viewerUrl} size={200} 
         />
      <p className="text-sm">Scan this QR code with your mobile to place the model in your room.</p>
    </div>
  );
}
