import { QRCodeCanvas } from "qrcode.react";

export default function QRCodeGenerator({ url }) {
  return (
    <div className="mt-4 flex flex-col items-center">
      <p>Scan to view in AR:</p>
      <br />
      <QRCodeCanvas value={url} size={200} />
      <p>Scan the QR code with your mobile device to view the product in your space.</p>
    </div>
  );
}
