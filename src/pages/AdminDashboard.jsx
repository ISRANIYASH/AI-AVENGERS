import AdminSidebar from "../components/AdminSidebar";

export default function AdminDashboard() {
  return (
    <div className="h-screen flex">
      <AdminSidebar />

      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-sm text-gray-500">Total Beds</p>
            <p className="text-2xl font-bold">8</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-sm text-gray-500">Occupied</p>
            <p className="text-2xl font-bold text-red-500">4</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-sm text-gray-500">Available</p>
            <p className="text-2xl font-bold text-green-500">4</p>
          </div>
        </div>
      </div>
    </div>
  );
}
