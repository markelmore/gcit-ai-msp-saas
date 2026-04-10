export default function AppLayout({ children, setPage }) {
  return (
    <div className="flex h-screen">
      
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white p-4">
        <h1 className="text-xl font-bold mb-6">GCIT MSP</h1>

        <nav className="space-y-3">
          <button onClick={() => setPage("dashboard")}>Dashboard</button>
          <button onClick={() => setPage("tickets")}>Tickets</button>
          <button onClick={() => setPage("billing")}>Billing</button>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}