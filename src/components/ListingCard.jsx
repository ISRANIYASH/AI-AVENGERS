import { Link } from "react-router-dom";
import { useSafety } from "../context/SafetyContext";

export default function ListingCard({ name, price, tag, image }) {
  const { score } = useSafety();

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
      {/* Tag */}
      {tag && (
        <span className="absolute top-3 left-3 z-10 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
          {tag}
        </span>
      )}

      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-500">${price}/month</p>
          </div>

          {/* Safety Circle */}
          <div className="w-12 h-12 rounded-full border-4 border-green-500 flex items-center justify-center text-sm font-bold text-green-600 bg-white">
            {score}%
          </div>
        </div>

        {/* Amenities */}
        <div className="flex gap-3 text-sm text-gray-500 mt-3">
          <span title="WiFi">📶</span>
          <span title="CCTV">📹</span>
          <span title="Security">🛡️</span>
          <span title="Water">💧</span>
        </div>

        {/* CTA */}
        <Link
          to={`/listing/${encodeURIComponent(name)}`}
          className="mt-4 block text-center text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
