import { memo } from "react";

const MetricCard = memo(({ title, value }) => {
  return (
    <div className="metric-card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
});

export default MetricCard;