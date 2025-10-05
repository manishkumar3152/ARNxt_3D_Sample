import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Link to="/product" className="px-6 py-3 bg-blue-600 text-white rounded-lg">
        Go to Product Page
      </Link>
    </div>
  );
}
