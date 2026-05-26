// Import React state hook
import { useState } from "react";

// Sleep tracker component
function SleepTracker() {

  // Store sleep hours
  const [sleepHours, setSleepHours] = useState(6);

  // Increase sleep hours
  function addSleepHour() {

    setSleepHours(sleepHours + 1);

  }

  return (

    // Main container
    <div className="bg-white p-6 rounded-2xl shadow-sm border">

      {/* Title */}
      <h2 className="text-xl font-bold mb-4">
        Sleep Tracker
      </h2>

      {/* Sleep display */}
      <p className="text-5xl font-bold text-purple-500 mb-6">
        {sleepHours} hrs
      </p>

      {/* Action button */}
      <button
        onClick={addSleepHour}
        className="bg-purple-500 hover:bg-purple-600 text-white px-5 py-3 rounded-xl transition"
      >
        Add Sleep Hour
      </button>

    </div>
  );
}

// Export component
export default SleepTracker;