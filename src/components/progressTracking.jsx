// src/components/ProgressTracking.jsx
import React from 'react';

export default function ProgressTracking() {
  const achievements = [
    { icon: '🔥', title: '7-Day Streak', description: 'Completed 7 workouts in a row' },
    { icon: '💪', title: '50 Workouts', description: 'Reached 50 total workouts' },
    { icon: '🎯', title: 'Goal Crusher', description: 'Met all daily goals this week' },
    { icon: '⚡', title: 'Early Bird', description: 'Started workout before 8 AM' }
  ];

  return (
    <div className="px-4 py-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-gray-800">Your Progress</h1>
      <p className="text-gray-500 mt-2">Stay motivated with your achievements</p>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-sky-600">6</h3>
          <p className="text-xs text-gray-600">Workouts</p>
        </div>
        <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-sky-600">2.5k</h3>
          <p className="text-xs text-gray-600">Calories</p>
        </div>
        <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-sky-600">7d</h3>
          <p className="text-xs text-gray-600">Streak</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm mb-6">
        <h2 className="font-semibold text-gray-800 mb-4">Achievements</h2>
        <div className="grid grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-4 text-center">
              <p className="text-3xl mb-2">{achievement.icon}</p>
              <p className="text-sm font-semibold text-gray-800">{achievement.title}</p>
              <p className="text-xs text-gray-600 mt-1">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-sky-100 to-cyan-100 rounded-3xl p-6">
        <p className="text-gray-700 font-medium">🎯 Next Milestone</p>
        <p className="text-2xl font-bold text-sky-600 mt-2">100 Workouts</p>
        <div className="mt-4 bg-white bg-opacity-50 rounded-full h-2">
          <div className="bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full h-2" style={{ width: '48%' }}></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">48% Complete • 52 workouts to go</p>
      </div>
    </div>
  );
}
