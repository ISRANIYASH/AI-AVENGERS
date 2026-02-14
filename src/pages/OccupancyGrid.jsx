import { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";

const rooms = [
  { id: 1, name: "AS", room: "101-A", status: "occupied", student: "Aryan S.", rent: "Paid" },
  { id: 2, name: "RK", room: "101-B", status: "occupied", student: "Rajat K.", rent: "Pending" },
  { id: 3, name: "+", room: "102-A", status: "empty" },
  { id: 4, name: "MS", room: "102-B", status: "occupied", student: "Mehak S.", rent: "Pending" },
  { id: 5, name: "JD", room: "103-A", status: "occupied", student: "John D.", rent: "Paid" },
  { id: 6, name: "+", room: "103-B", status: "empty" },
  { id: 7, name: "AP", room: "104-A", status: "occupied", student: "Amit P.", rent: "Paid" },
  { id: 8, name: "VP", room: "104-B", status: "occupied", student: "Vikas P.", rent: "Pending" },
];

export default function OccupancyGrid() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const total = 50;
  const occupied = 42;
  const pending = 8;

  return (
    <div className="h-screen flex">
      <AdminSidebar />

      <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6">Occupancy Grid</h1>

        {/* Hostel Card */}
        <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4 mb-6">
          <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white text-2xl">
            🏢
          </div>
          <div>
            <p className="font-semibold text-lg">Skyline Hostel</p>
            <p className="text-sm text-gray-500">Building A • Sector 14, Noida</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <p className="text-sm text-gray-500">TOTAL</p>
            <p className="text-2xl font-bold">{total}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <p className="text-sm text-green-600">OCCUPIED</p>
            <p className="text-2xl font-bold">{occupied}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <p className="text-sm text-orange-600">PENDING</p>
            <p className="text-2xl font-bold">{pending}</p>
          </div>
        </div>

        {/* Grid Header */}
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">Occupancy Grid</h2>
          <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600">
            Floor 01
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {rooms.map((r) => (
            <div
              key={r.id}
              onClick={() => setSelectedRoom(r)}
              className={`cursor-pointer rounded-xl p-4 text-center font-semibold transition hover:scale-105 ${
                r.status === "occupied"
                  ? "bg-red-100 text-red-600"
                  : "bg-green-100 text-green-600"
              }`}
            >
              <p className="text-lg">{r.name}</p>
              <p className="text-sm font-normal">
                {r.status === "occupied" ? r.room : "Empty"}
              </p>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex gap-6 items-center text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span>Occupied</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span>Empty</span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-80 shadow-lg">
            <h3 className="text-lg font-bold mb-2">Room Details</h3>

            {selectedRoom.status === "occupied" ? (
              <>
                <p><b>Room:</b> {selectedRoom.room}</p>
                <p><b>Student:</b> {selectedRoom.student}</p>
                <p><b>Rent Status:</b> {selectedRoom.rent}</p>
              </>
            ) : (
              <p>This room is currently empty.</p>
            )}

            <button
              onClick={() => setSelectedRoom(null)}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
