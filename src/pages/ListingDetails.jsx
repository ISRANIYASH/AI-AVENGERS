import { useParams, Link } from "react-router-dom";

export default function ListingDetails() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Image */}
      <div className="h-80 bg-gray-300 relative">
        <Link
          to="/"
          className="absolute top-4 left-4 bg-white px-3 py-1 rounded shadow text-sm"
        >
          ← Back to Search
        </Link>
      </div>

      <div className="max-w-6xl mx-auto p-6 grid grid-cols-3 gap-6">
        {/* Left Content */}
        <div className="col-span-2">
          <h1 className="text-3xl font-bold mb-1">{id}</h1>
          <p className="text-gray-500 mb-4">
            North Campus, Delhi · Near Metro Station Gate 3
          </p>

          {/* Safety Scorecard */}
          <div className="bg-white rounded-xl shadow p-4 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-lg">Safety Scorecard</h2>
                <p className="text-sm text-gray-500">
                  Based on CCTV, Guards, Biometrics, etc.
                </p>
              </div>
              <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center text-lg font-bold text-green-600">
                92%
              </div>
            </div>

            <div className="mt-4 space-y-2 text-sm">
              <p>✅ 24/7 CCTV Surveillance</p>
              <p>✅ Round-the-clock Security Guards</p>
              <p>✅ Biometric Access Control</p>
            </div>
          </div>

          {/* Amenities */}
          <div className="bg-white rounded-xl shadow p-4 mb-6">
            <h2 className="font-semibold text-lg mb-3">Amenities & Facilities</h2>
            <div className="grid grid-cols-4 gap-4 text-sm">
              <div>📶 High-speed WiFi</div>
              <div>⚡ Power Backup</div>
              <div>🏋️ Gym Access</div>
              <div>🍽️ Daily Mess</div>
              <div>🧺 Laundry</div>
              <div>💧 RO Water</div>
              <div>❄️ Air Conditioning</div>
              <div>🧹 Housekeeping</div>
            </div>
          </div>

          {/* About */}
          <div className="bg-white rounded-xl shadow p-4">
            <h2 className="font-semibold text-lg mb-2">About the Property</h2>
            <p className="text-sm text-gray-600">
              This PG offers premium student living with spacious rooms, strong
              security systems, and excellent connectivity to the campus. Designed
              for comfort and safety.
            </p>
          </div>
        </div>

        {/* Right Side Booking Card */}
        <div className="bg-white rounded-xl shadow p-4 h-fit">
          <p className="text-2xl font-bold mb-2">₹15,000 / month</p>

          <div className="mb-4">
            <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded text-sm">
              Rent Status: PAID
            </span>
          </div>

          <div className="mb-4 text-sm">
            <p>🛏️ 3 Beds available in 2-sharing rooms</p>
            <p>💰 Security Deposit: ₹15,000</p>
            <p>📅 Notice Period: 30 Days</p>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded mb-2">
            Apply / Book Bed
          </button>
          <button className="w-full border border-blue-600 text-blue-600 py-2 rounded">
            Schedule a Visit
          </button>
        </div>
      </div>
    </div>
  );
}
