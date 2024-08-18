"use client";

import React, { useState } from "react";
import { useStore } from "@/store";

const GoalForm = () => {
  const { addGoal } = useStore((state) => state);
  const [title, setTitle] = useState("");
  const [target, setTarget] = useState("");
  const [timeframe, setTimeframe] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && target && timeframe) {
      addGoal({ title, target, timeframe });
      setTitle("");
      setTarget("");
      setTimeframe("");
    } else {
      // Handle error - required fields are not filled
      console.error("Please fill in all required fields.");
      // You might want to display an error message to the user here.
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold mb-4">Set a New Goal</h2>
      <div className="mb-3">
        <label
          htmlFor="title"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Goal Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="target"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Target:
        </label>
        <input
          type="number"
          id="target"
          name="target"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="timeframe"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Timeframe (weeks):
        </label>
        <input
          type="number"
          id="timeframe"
          name="timeframe"
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
      >
        Add Goal
      </button>
    </form>
  );
};

export default GoalForm;