"use client";

import React from "react";
import { useStore } from "@/store";
import GoalList from "./GoalList";
import WorkoutLog from "./WorkoutLog";
import SocialFeed from "./SocialFeed";

const Dashboard = () => {
  const { goals, workouts, user } = useStore((state) => state);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Fitness Tracker</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h2 className="text-xl font-bold mb-2">Your Goals</h2>
          <GoalList goals={goals} />
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">Workout Log</h2>
          <WorkoutLog workouts={workouts} />
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">Social Feed</h2>
          <SocialFeed />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;