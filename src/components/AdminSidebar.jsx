import { NavLink } from "react-router-dom";

export default function AdminSidebar() {
  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded-lg text-sm font-medium ${
      isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <div className="w-64 bg-white border-r p-4">
      <h2 className="text-xl font-bold text-blue-700 mb-6">AASHRAY Admin</h2>

      <nav className="space-y-2">
        <NavLink to="/admin" className={linkClass}>
          Dashboard
        </NavLink>

        <NavLink to="/admin/occupancy" className={linkClass}>
          Occupancy
        </NavLink>

        <NavLink to="/admin/rent" className={linkClass}>
          Rent Tracker
        </NavLink>

        <NavLink to="/admin/safety" className={linkClass}>
          Safety Control
        </NavLink>
      </nav>
    </div>
  );
}
