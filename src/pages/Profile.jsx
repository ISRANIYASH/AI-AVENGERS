import Navbar from "../components/Navbar";

export default function Profile() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1 bg-gray-50">
        {/* Left Profile Card */}
        <div className="w-1/3 p-8">
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <div className="w-24 h-24 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold">
              A
            </div>
            <h2 className="mt-4 text-xl font-semibold">Alex Johnson</h2>
            <p className="text-gray-500 text-sm">Computer Science Student</p>

            <div className="mt-4 text-sm text-gray-600">
              <p>📍 Delhi, India</p>
              <p>🎓 2nd Year</p>
              <p>🏫 North Campus</p>
            </div>
          </div>
        </div>

        {/* Right Details */}
        <div className="w-2/3 p-8">
          <div className="bg-white rounded-xl shadow p-6 mb-6">
            <h3 className="font-semibold text-lg mb-3">About</h3>
            <p className="text-sm text-gray-600">
              I am a computer science student looking for a safe and clean place
              to stay near my university. I prefer quiet environments and
              organized roommates.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-lg mb-3">Preferences</h3>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                Quiet
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                Clean
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                Non-Smoker
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                Early Riser
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
