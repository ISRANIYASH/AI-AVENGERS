import { Link } from "react-router-dom";

export default function Navbar({ onBellClick }) {
  return (
    <div className="h-14 w-full bg-white border-b flex items-center justify-between px-6">
      {/* Left: Logo */}
      <Link to="/" className="font-bold text-xl text-blue-700">
        AASHRAY
      </Link>

      {/* Center: Search + Filters */}
      <div className="flex gap-3 items-center">
        <input
          className="border rounded-lg px-3 py-1 w-64 text-sm"
          placeholder="Search near university or city..."
        />
        <button className="px-3 py-1 border rounded-lg text-sm">Price</button>
        <button className="px-3 py-1 border rounded-lg text-sm">Safety</button>
        <button className="px-3 py-1 border rounded-lg text-sm">Distance</button>
        <button className="px-3 py-1 border rounded-lg text-sm">Amenities</button>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        {/* Admin Shortcuts */}
        <Link to="/admin" className="text-sm text-gray-600 hover:text-blue-600">
          Dashboard
        </Link>
        <Link to="/admin/safety" className="text-sm text-gray-600 hover:text-blue-600">
          Safety
        </Link>
        <Link to="/admin/occupancy" className="text-sm text-gray-600 hover:text-blue-600">
          Occupancy
        </Link>
        <Link to="/admin/rent" className="text-sm text-gray-600 hover:text-blue-600">
          Rent
        </Link>

        {/* Notification Bell */}
        <button
          onClick={onBellClick}
          className="text-xl hover:text-blue-600"
          title="Notifications"
        >
          🔔
        </button>

        {/* ✅ Profile Button */}
        <Link to="/profile" className="text-sm font-medium text-blue-600">
          Profile
        </Link>

        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
          A
        </div>
      </div>
    </div>
  );
}
