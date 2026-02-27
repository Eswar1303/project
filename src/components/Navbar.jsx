export default function Navbar({ onRefresh }) {
  return (
    <nav className="navbar">
      <h1>Analytics Dashboard</h1>
      <button onClick={onRefresh}>Refresh</button>
    </nav>
  );
}