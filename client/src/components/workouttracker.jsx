// Import React state hook
import { useState } from "react";

// Workout tracker component
function WorkoutTracker() {

  // State to track completed workouts
  const [workouts, setWorkouts] = useState(0);

  // Function to increase workout count
  function completeWorkout() {

    setWorkouts(workouts + 1);

  }

  return (

    // Card container
    <div className="bg-white p-6 rounded-2xl shadow-sm border">

      {/* Heading */}
      <h2 className="text-xl font-bold mb-4">
        Workout Tracker
      </h2>

      {/* Workout count */}
      <p className="text-5xl font-bold text-green-500 mb-6">
        {workouts}
      </p>

      {/* Button */}
      <button
        onClick={completeWorkout}
        className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl transition"
      >
        Complete Workout
      </button>

    </div>
  );
}

// Export component
export default WorkoutTracker;