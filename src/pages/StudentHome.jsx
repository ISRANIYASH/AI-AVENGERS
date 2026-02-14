import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ListingCard from "../components/ListingCard";
import NotificationPanel from "../components/NotificationPanel";
import { useSafety } from "../context/SafetyContext";

const listings = [
  {
    id: 1,
    name: "Emerald Heights PG",
    price: 250,
    tag: "Top Rated",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
  },
  {
    id: 2,
    name: "The Scholar's Stay",
    price: 310,
    tag: "Recommended",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
  {
    id: 3,
    name: "Lakeside Dorms",
    price: 185,
    tag: "Recently Added",
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
  },
  {
    id: 4,
    name: "Prime Living PG",
    price: 295,
    tag: "Verified",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  },
];

export default function StudentHome() {
  const [openNotif, setOpenNotif] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [lastScore, setLastScore] = useState(null);

  const { score } = useSafety(); // 👈 GLOBAL LIVE SCORE

  const notifications = [
    {
      type: "rent",
      title: "Rent Paid",
      message: "Your rent for October has been marked as PAID by the warden.",
    },
    {
      type: "match",
      title: "New Match!",
      message: "You have a potential roommate match. Check your profile.",
    },
    {
      type: "safety",
      title: "Hostel Safety Score",
      message: "Safety score updated by admin.",
    },
  ];

  // 👇 Show toast whenever safety score changes
  useEffect(() => {
    if (lastScore !== null && lastScore !== score) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
    setLastScore(score);
  }, [score]);

  return (
    <div className="h-screen flex flex-col relative">
      <Navbar onBellClick={() => setOpenNotif(true)} />

      <div className="flex flex-1">
        {/* 🗺️ Map Area (OpenStreetMap - No Token Needed) */}
        <div className="w-1/2 h-full">
          <iframe
            title="map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=77.10%2C28.55%2C77.30%2C28.70&layer=mapnik"
            className="w-full h-full border-0"
          ></iframe>
        </div>

        {/* Listings Area */}
        <div className="w-1/2 p-6 overflow-y-auto bg-gray-50">
          <h2 className="text-2xl font-semibold mb-1">Hostels & PGs</h2>
          <p className="text-sm text-gray-500 mb-4">
            Found {listings.length} results near your location
          </p>

          <div className="grid grid-cols-2 gap-6">
            {listings.map((l) => (
              <ListingCard
                key={l.id}
                name={l.name}
                price={l.price}
                tag={l.tag}
                image={l.image}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right-side Notification Panel */}
      <NotificationPanel
        open={openNotif}
        onClose={() => setOpenNotif(false)}
        notifications={notifications}
      />

      {/* 🔔 Toast for Safety Score Update */}
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-white shadow-lg border rounded-lg px-4 py-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
            ✓
          </div>
          <div>
            <p className="font-semibold text-sm">Safety Score Updated</p>
            <p className="text-xs text-gray-500">
              New score is {score}% based on admin settings
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
