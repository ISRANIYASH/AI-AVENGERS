import { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";

export default function RentTracker() {
  const [tenants, setTenants] = useState([
    { id: 1, name: "Aryan S.", room: "102", due: "₹8,500", status: "PENDING" },
    { id: 2, name: "Rajat K.", room: "101", due: "₹8,500", status: "PAID" },
    { id: 3, name: "Mehak S.", room: "102", due: "₹9,000", status: "PENDING" },
  ]);

  const markAsPaid = (id) => {
    setTenants((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, status: "PAID" } : t
      )
    );
  };

  return (
    <div className="h-screen flex">
      <AdminSidebar />

      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold mb-6">Rent Tracker</h1>

        <div className="bg-white rounded-xl shadow divide-y">
          {tenants.map((t) => (
            <div
              key={t.id}
              className="p-4 flex items-center justify-between"
            >
              {/* Left Info */}
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-500">
                  Room {t.room} • Due: {t.due}
                </p>
              </div>

              {/* Right Actions */}
              <div className="flex items-center gap-4">
                {t.status === "PAID" ? (
                  <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium">
                    PAID
                  </span>
                ) : (
                  <span className="px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-700 font-medium">
                    PENDING
                  </span>
                )}

                {t.status === "PENDING" ? (
                  <button
                    onClick={() => markAsPaid(t.id)}
                    className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-blue-700 transition"
                  >
                    Mark as Paid
                  </button>
                ) : (
                  <button
                    disabled
                    className="bg-gray-200 text-gray-500 px-4 py-1.5 rounded-lg text-sm cursor-not-allowed"
                  >
                    Completed
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <button className="mt-6 w-full border border-blue-600 text-blue-600 py-2 rounded-lg font-medium hover:bg-blue-50 transition">
          View All Tenants →
        </button>
      </div>
    </div>
  );
}
