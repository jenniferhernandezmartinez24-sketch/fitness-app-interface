import React, { useState } from 'react';

const HabitChecklist = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Drink Water', completed: false },
    { id: 2, name: 'Exercise', completed: false },
    { id: 3, name: 'Meditate', completed: false },
    { id: 4, name: 'Read', completed: false },
    { id: 5, name: 'Journal', completed: false },
    { id: 6, name: 'Sleep Early', completed: false }
  ]);

  const toggleHabit = (id) => {
    setHabits(habits.map(habit => 
      habit.id === id ? { ...habit, completed: !habit.completed } : habit
    ));
  };

  const completedCount = habits.filter(habit => habit.completed).length;
  const progressPercentage = (completedCount / habits.length) * 100;

  return (
    <div>
      <h2>Habit Tracker</h2>
      <div>
        <h3>Progress: {progressPercentage.toFixed(0)}%</h3>
        <div style={{ width: '100%', background: '#e0e0e0' }}>
          <div style={{ width: `${progressPercentage}%`, background: '#76c7c0', height: '20px' }}></div>
        </div>
      </div>
      <ul>
        {habits.map(habit => (
          <li key={habit.id} onClick={() => toggleHabit(habit.id)} style={{ cursor: 'pointer', textDecoration: habit.completed ? 'line-through' : 'none' }}>
            {habit.name} {habit.completed ? '✅' : ''}
          </li>
        ))}
      </ul>
      <h3>Weekly Consistency Tracking</h3>
      {/* Placeholder: Implement weekly consistency tracking logic here */}
    </div>
  );
};

export default HabitChecklist;