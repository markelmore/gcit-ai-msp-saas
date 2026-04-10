import { useEffect, useState } from "react";
import API from "../api";

export default function Dashboard() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await API.get("/tickets");
      setTickets(res.data);
    })();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="grid gap-4">
        {tickets.map(t => (
          <div
            key={t._id}
            className="bg-white p-4 rounded-xl shadow border"
          >
            <div className="flex justify-between">
              <h2 className="font-semibold">{t.title}</h2>
              <span className="text-sm text-blue-500">
                {t.status}
              </span>
            </div>

            <p className="text-gray-600 mt-2">
              {t.description}
            </p>

            <pre className="text-xs bg-gray-100 p-2 mt-2 rounded">
              {t.aiAnalysis}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}