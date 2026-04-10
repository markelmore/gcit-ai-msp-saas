export default function Sidebar() {
  return (
    <div style={{
      width: 220,
      height: "100vh",
      borderRight: "1px solid #ddd",
      padding: 20
    }}>
      <h2>GCIT MSP</h2>

      <ul>
        <li>Dashboard</li>
        <li>Tickets</li>
        <li>Billing</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}