import { useEffect, useState, useCallback } from "react";

export default function useMetrics() {
  const [metrics, setMetrics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const generateMetrics = () => ([
    { id: 1, title: "Users", value: Math.floor(Math.random() * 1000) },
    { id: 2, title: "Revenue", value: "$" + Math.floor(Math.random() * 5000) },
    { id: 3, title: "Performance", value: Math.floor(Math.random() * 100) + "%" },
  ]);

  const refresh = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      try {
        setMetrics(generateMetrics());
        setError(false);
      } catch {
        setError(true);
      }
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    refresh();
    const interval = setInterval(refresh, 5000);
    return () => clearInterval(interval);
  }, [refresh]);

  return { metrics, refresh, loading, error };
}