import API from "../api";

const plans = [
  { id: "starter", price: "$29", desc: "Basic IT support" },
  { id: "pro", price: "$79", desc: "AI automation included" },
  { id: "enterprise", price: "$199", desc: "Full MSP suite" }
];

export default function Billing() {
  const subscribe = async (plan) => {
    const res = await API.post("/billing/create-checkout", { plan });
    window.location.href = res.data.url;
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Choose Your Plan</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map(p => (
          <div
            key={p.id}
            className="bg-white border rounded-xl p-6 shadow"
          >
            <h2 className="text-xl font-semibold capitalize">
              {p.id}
            </h2>

            <p className="text-3xl font-bold mt-2">{p.price}</p>
            <p className="text-gray-500 mt-1">{p.desc}</p>

            <button
              onClick={() => subscribe(p.id)}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg"
            >
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}