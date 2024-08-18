"use client";

import React, { useState } from "react";
import { useStore } from "@/store";
import { formatDate } from "@/utils/helpers";

const WorkoutLog = () => {
  const { workouts, addWorkout } = useStore((state) => state);
  const [newWorkout, setNewWorkout] = useState({
    date: new Date(),
    type: "",
    duration: "",
    intensity: "",
    notes: "",
  });

  const handleChange = (e) => {
    setNewWorkout({ ...newWorkout, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addWorkout(newWorkout);
    setNewWorkout({
      date: new Date(),
      type: "",
      duration: "",
      intensity: "",
      notes: "",
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold mb-2">Workout Log</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formatDate(newWorkout.date)}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="type" className="block text-gray-700 text-sm font-bold mb-2">
            Type:
          </label>
          <select
            id="type"
            name="type"
            value={newWorkout.type}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Type</option>
            <option value="Cardio">Cardio</option>
            <option value="Strength Training">Strength Training</option>
            <option value="Yoga">Yoga</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="duration" className="block text-gray-700 text-sm font-bold mb-2">
            Duration (minutes):
          </label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={newWorkout.duration}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="intensity" className="block text-gray-700 text-sm font-bold mb-2">
            Intensity:
          </label>
          <select
            id="intensity"
            name="intensity"
            value={newWorkout.intensity}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Intensity</option>
            <option value="Light">Light</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="notes" className="block text-gray-700 text-sm font-bold mb-2">
            Notes:
          </label>
          <textarea
            id="notes"
            name="notes"
            value={newWorkout.notes}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
        >
          Add Workout
        </button>
      </form>
      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Workout History</h3>
        <ul className="list-disc">
          {workouts.map((workout, index) => (
            <li key={index}>
              <p className="font-medium">
                {formatDate(workout.date)} - {workout.type} (
                {workout.duration} minutes, {workout.intensity})
              </p>
              <p className="text-gray-600">{workout.notes}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkoutLog;