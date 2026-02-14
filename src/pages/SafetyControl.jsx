import { useState, useEffect } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { useSafety } from "../context/SafetyContext";

export default function SafetyControl() {
  const { setScore } = useSafety();

  const [guards, setGuards] = useState(true);
  const [cctv, setCctv] = useState(true);
  const [biometric, setBiometric] = useState(false);
  const [fire, setFire] = useState(true);

  const calculateScore = () => {
    let s = 0;
    if (guards) s += 25;
    if (cctv) s += 25;
    if (biometric) s += 25;
    if (fire) s += 25;
    return s;
  };

  const score = calculateScore();

  useEffect(() => {
    setScore(score); // ✅ Update global safety score
  }, [guards, cctv, biometric, fire]);

  return (
    <div className="h-screen flex">
      <AdminSidebar />

      <div className="flex-1 p-6 bg-gray-50 flex gap-6">
        {/* Left Panel */}
        <div className="flex-1 bg-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-bold mb-2">Safety Management</h2>
          <p className="text-sm text-gray-500 mb-6">
            Toggle features to update safety score.
          </p>

          <ToggleRow label="24/7 Security Guards" value={guards} onChange={setGuards} />
          <ToggleRow label="CCTV Surveillance" value={cctv} onChange={setCctv} />
          <ToggleRow label="Biometric Entry System" value={biometric} onChange={setBiometric} />
          <ToggleRow label="Fire Safety Audit" value={fire} onChange={setFire} />
        </div>

        {/* Right Panel */}
        <div className="w-80 bg-white rounded-xl p-6 shadow flex flex-col items-center justify-center">
          <h3 className="font-semibold mb-4">Live Safety Score</h3>

          <div className="w-40 h-40 rounded-full border-8 border-blue-600 flex items-center justify-center text-3xl font-bold text-blue-600">
            {score}%
          </div>

          <p className="text-sm text-gray-500 mt-4 text-center">
            Based on active safety protocols
          </p>
        </div>
      </div>
    </div>
  );
}

function ToggleRow({ label, value, onChange }) {
  return (
    <div className="flex items-center justify-between border rounded-lg p-4 mb-4">
      <span className="font-medium">{label}</span>
      <button
        onClick={() => onChange(!value)}
        className={`w-12 h-6 rounded-full relative transition ${
          value ? "bg-green-500" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition ${
            value ? "translate-x-6" : ""
          }`}
        />
      </button>
    </div>
  );
}
