export default function NotificationPanel({ open, onClose, notifications }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/20 flex justify-end z-50">
      <div className="w-96 bg-white h-full shadow-xl p-4 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Notification Center</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-3">
          {notifications.map((n, i) => (
            <div key={i} className="border rounded-lg p-3 flex gap-3">
              <div className="text-xl">
                {n.type === "rent" && "💳"}
                {n.type === "match" && "❤️"}
                {n.type === "safety" && "🛡️"}
              </div>
              <div>
                <p className="font-medium">{n.title}</p>
                <p className="text-sm text-gray-500">{n.message}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-4 border rounded-lg py-2 text-sm">
          View History
        </button>
      </div>
    </div>
  );
}

