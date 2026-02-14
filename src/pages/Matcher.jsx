import { useState } from "react";

const profiles = [
  {
    id: 1,
    name: "Alex, 22",
    major: "Comp Sci",
    tags: ["Night Owl", "Quiet", "Clean", "Non-Smoker"],
    bio:
      "Looking for someone who doesn't mind late-night coding sessions and coffee runs.",
  },
  {
    id: 2,
    name: "Rahul, 21",
    major: "Mechanical",
    tags: ["Early Riser", "Gym", "Clean"],
    bio: "Morning workouts, disciplined routine, chill roommate.",
  },
];

export default function Matcher() {
  const [index, setIndex] = useState(0);

  const profile = profiles[index];

  const next = () => {
    if (index < profiles.length - 1) setIndex(index + 1);
  };

  if (!profile) {
    return (
      <div className="h-screen flex items-center justify-center text-xl font-semibold">
        No more profiles 🎉
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white w-80 rounded-xl shadow-lg overflow-hidden">
        <div className="h-64 bg-gray-300"></div>

        <div className="p-4">
          <h2 className="text-xl font-bold">{profile.name}</h2>
          <p className="text-sm text-gray-500 mb-2">{profile.major}</p>

          <div className="flex flex-wrap gap-2 mb-3">
            {profile.tags.map((t) => (
              <span
                key={t}
                className="text-xs bg-gray-200 px-2 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          <p className="text-sm text-gray-600">{profile.bio}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-6 mt-6">
        <button
          onClick={next}
          className="w-12 h-12 rounded-full bg-red-500 text-white text-xl"
        >
          ✕
        </button>
        <button
          onClick={next}
          className="w-12 h-12 rounded-full bg-green-500 text-white text-xl"
        >
          ❤
        </button>
      </div>
    </div>
  );
}
