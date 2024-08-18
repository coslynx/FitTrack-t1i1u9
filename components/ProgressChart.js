"use client";

import React, { useEffect, useState } from "react";
import { useStore } from "@/store";
import { Line } from "react-chartjs-2";

const ProgressChart = ({ goal }) => {
  const [chartData, setChartData] = useState(null);
  const { user } = useStore((state) => state);

  useEffect(() => {
    if (!user) {
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/goals/${goal.id}/progress?userId=${user.id}`
        );
        const data = await response.json();
        const labels = data.map((item) => item.date);
        const progress = data.map((item) => item.progress);
        setChartData({
          labels,
          datasets: [
            {
              label: "Progress",
              data: progress,
              borderColor: "rgba(75,192,192,1)",
              backgroundColor: "rgba(75,192,192,0.2)",
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching progress data:", error);
        // Handle the error gracefully, e.g., display a message to the user.
      }
    };

    fetchData();
  }, [goal.id, user]);

  if (!chartData) {
    return <div>Loading progress data...</div>;
  }

  return (
    <div className="mt-4">
      <Line
        data={chartData}
        options={{
          responsive: true,
          title: {
            display: true,
            text: `Progress for ${goal.title}`,
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default ProgressChart;