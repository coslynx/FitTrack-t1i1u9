"use client";

import React from "react";
import { useStore } from "@/store";
import GoalItem from "./GoalItem";

const GoalList = ({ goals }) => {
  const { user } = useStore((state) => state);

  if (!user) {
    return null;
  }

  return (
    <ul className="list-disc">
      {goals.map((goal) => (
        <GoalItem key={goal.id} goal={goal} />
      ))}
    </ul>
  );
};

export default GoalList;