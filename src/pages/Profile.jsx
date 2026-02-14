import Navbar from "../components/Navbar";
import { useSafety } from "../context/SafetyContext";

export default function Profile() {
  const { score } = useSafety(); // live safety score from admin panel

  const user = {
    name: "Alex Johnson",
    email: "alex.johnson@gmail.com",
    hostel: "Emerald Heights PG",
    room: "101-A",
    rentStatus: "Paid",
    avatar: "https://i.pravatar.cc/150?img=12",
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 bg-gray-50 p-8">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-6">
          {/* Left: Profile Card */}
          <div className="col-span-1 bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <img
              src={user.avatar}
              alt="profile"
              className="w-28 h-28 rounded-full object-cover mb-4"
            />
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>

            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
              Edit Profile
            </button>
          </div>

          {/* Right: Info Cards */}
          <div className="col-span-2 grid grid-cols-2 gap-6">
            {/* Hostel */}
            <div className="bg-white rounded-xl shadow p-5">
              <p className="text-sm text-gray-500 mb-1">Hostel</p>
              <p className="text-lg font-semibold">{user.hostel}</p>
            </div>

            {/* Room */}
            <div className="bg-white rounded-xl shadow p-5">
              <p className="text-sm text-gray-500 mb-1">Room</p>
              <p className="text-lg font-semibold">{user.room}</p>
            </div>

            {/* Rent Status */}
            <div className="bg-white rounded-xl shadow p-5">
              <p className="text-sm text-gray-500 mb-1">Rent Status</p>
              <p
                className={`text-lg font-semibold ${
                  user.rentStatus === "Paid" ? "text-green-600" : "text-red-600"
                }`}
              >
                {user.rentStatus}
              </p>
            </div>

            {/* Safety Score */}
            <div className="bg-white rounded-xl shadow p-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Safety Score</p>
                <p className="text-lg font-semibold text-blue-600">{score}%</p>
              </div>
              <div className="w-14 h-14 rounded-full border-4 border-blue-600 flex items-center justify-center font-bold text-blue-600">
                {score}%
              </div>
            </div>
          </div>

          {/* Bottom: Quick Actions */}
          <div className="col-span-3 bg-white rounded-xl shadow p-6 flex justify-between items-center">
            <div>
              <p className="font-semibold">Account Settings</p>
              <p className="text-sm text-gray-500">
                Manage your profile and security settings
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50">
                Change Password
              </button>
              <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
