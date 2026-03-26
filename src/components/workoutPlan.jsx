// src/components/WorkoutPlan.jsx
import React, { useState } from 'react';

export default function WorkoutPlan() {
  const [selectedDay, setSelectedDay] = useState(0);

  const workoutPlan = [
    { day: 'Mon', name: 'Upper Body', duration: '45min', difficulty: 'Intermediate' },
    { day: 'Tue', name: 'Cardio', duration: '30min', difficulty: 'Easy' },
    { day: 'Wed', name: 'Flexibility', duration: '25min', difficulty: 'Easy' },
    { day: 'Thu', name: 'Lower Body', duration: '50min', difficulty: 'Advanced' },
    { day: 'Fri', name: 'Core Power', duration: '35min', difficulty: 'Intermediate' },
    { day: 'Sat', name: 'Full Body', duration: '60min', difficulty: 'Advanced' },
    { day: 'Sun', name: 'Rest Day', duration: 'Recovery', difficulty: 'Rest' }
  ];

  const current = workoutPlan[selectedDay];

  return (
    <div className="px-4 py-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-gray-800">Your Week</h1>
      <p className="text-gray-500 mt-2">March 24 - March 30</p>

      <div className="bg-white rounded-2xl p-4 mb-6 shadow-sm">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setSelectedDay(Math.max(0, selectedDay - 1))}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            ←
          </button>
          <div className="flex gap-2 overflow-x-auto flex-1 mx-2">
            {workoutPlan.map((workout, index) => (
              <button
                key={index}
                onClick={() => setSelectedDay(index)}
                className={`px-3 py-2 rounded-lg font-semibold ${
                  selectedDay === index
                    ? 'bg-sky-500 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {workout.day}
              </button>
            ))}
          </div>
          <button
            onClick={() => setSelectedDay(Math.min(6, selectedDay + 1))}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            →
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-100 to-sky-100 rounded-3xl p-8 mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">{current.name}</h2>
        <p className="text-gray-600 mt-2">{current.day}, March {24 + selectedDay}</p>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-sky-600">{current.duration}</p>
            <p className="text-sm text-gray-600 mt-1">Duration</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-bold px-3 py-2 rounded-full inline-block bg-blue-100 text-blue-700">
              {current.difficulty}
            </p>
            <p className="text-sm text-gray-600 mt-1">Level</p>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold py-3 rounded-xl hover:shadow-lg">
          {current.day === 'Sun' ? 'Enjoy Your Rest' : 'Start Workout'}
        </button>
      </div>
    </div>
  );
}
