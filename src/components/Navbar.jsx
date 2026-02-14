import { NavLink, Link } from "react-router-dom";

export default function Navbar({ onBellClick }) {
  const linkClass = ({ isActive }) =>
    `text-sm transition ${
      isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"
    }`;

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
        <button className="px-3 py-1 border rounded-lg text-sm hover:bg-gray-50">
          Price
        </button>
        <button className="px-3 py-1 border rounded-lg text-sm hover:bg-gray-50">
          Safety
        </button>
        <button className="px-3 py-1 border rounded-lg text-sm hover:bg-gray-50">
          Distance
        </button>
        <button className="px-3 py-1 border rounded-lg text-sm hover:bg-gray-50">
          Amenities
        </button>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        {/* Admin Shortcuts */}
        <NavLink to="/admin" className={linkClass}>
          Dashboard
        </NavLink>
        <NavLink to="/admin/safety" className={linkClass}>
          Safety
        </NavLink>
        <NavLink to="/admin/occupancy" className={linkClass}>
          Occupancy
        </NavLink>
        <NavLink to="/admin/rent" className={linkClass}>
          Rent
        </NavLink>

        {/* Notification Bell */}
        <button
          onClick={onBellClick}
          className="text-xl hover:text-blue-600"
          title="Notifications"
        >
          🔔
        </button>

        {/* Profile Link */}
        <NavLink to="/profile" className={linkClass}>
          Profile
        </NavLink>

        {/* Avatar (Clickable) */}
        <Link
          to="/profile"
          className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold hover:opacity-90"
          title="Profile"
        >
          A
        </Link>
      </div>
    </div>
  );
}
