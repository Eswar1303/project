import Navbar from "../components/Navbar";
import MetricCard from "../components/MetricCard";
import useMetrics from "../hooks/useMetrics";
import "../styles/dashboard.css";

export default function Dashboard() {
  const { metrics, refresh, loading, error } = useMetrics();

  return (
    <>
      <Navbar onRefresh={refresh} />
      <div className="dashboard">
        {loading && <p>Loading metrics...</p>}
        {error && <p className="error">Failed to load data</p>}

        <div className="grid">
          {metrics.map((m) => (
            <MetricCard key={m.id} {...m} />
          ))}
        </div>
      </div>
    </>
  );
}