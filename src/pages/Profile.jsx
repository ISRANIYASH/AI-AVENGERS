import Navbar from "../components/Navbar";

export default function Profile() {
  const user = {
    name: "Alex Johnson",
    email: "alex.johnson@gmail.com",
    room: "101-A",
    hostel: "Emerald Heights PG",
    rentStatus: "Paid",
    safetyScore: 75,
    avatar: "https://i.pravatar.cc/150?img=12",
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">
          {/* Profile Header */}
          <div className="flex items-center gap-6 border-b pb-6">
            <img
              src={user.avatar}
              alt="profile"
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <h2 className="text-2xl font-semibold">{user.name}</h2>
              <p className="text-gray-500">{user.email}</p>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-gray-500">Hostel</p>
              <p className="font-semibold">{user.hostel}</p>
            </div>

            <div className="p-4 border rounded-lg">
              <p className="text-sm text-gray-500">Room</p>
              <p className="font-semibold">{user.room}</p>
            </div>

            <div className="p-4 border rounded-lg">
              <p className="text-sm text-gray-500">Rent Status</p>
              <p
                className={`font-semibold ${
                  user.rentStatus === "Paid" ? "text-green-600" : "text-red-600"
                }`}
              >
                {user.rentStatus}
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <p className="text-sm text-gray-500">Safety Score</p>
              <p className="font-semibold text-blue-600">{user.safetyScore}%</p>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              Edit Profile
            </button>
            <button className="px-4 py-2 border rounded-lg">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
