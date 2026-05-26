// Import React state hook
import { useState } from "react";

// Water tracker component
function WaterTracker() {

  // State to store water intake count
  const [waterIntake, setWaterIntake] = useState(0);

  // Function to increase water count
  function addWater() {

    // Update state value
    setWaterIntake(waterIntake + 1);

  }

  return (

    // Card container
    <div className="bg-white p-6 rounded-2xl shadow-sm border">

      {/* Card heading */}
      <h2 className="text-xl font-bold mb-4">
        Water Intake Tracker
      </h2>

      {/* Water count display */}
      <p className="text-5xl font-bold text-blue-500 mb-6">
        {waterIntake} L
      </p>

      {/* Add water button */}
      <button
        onClick={addWater}
        className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-xl transition"
      >
        Add Water
      </button>

    </div>
  );
}

// Export component
export default WaterTracker;