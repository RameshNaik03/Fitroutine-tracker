// Import React functionality
import React from "react";

function App() {

  // This is the main UI returned by the component
  return (

    // Main container with full screen height and black background
    <div className="min-h-screen bg-black text-white flex items-center justify-center">

      {/* Main heading */}
      <h1 className="text-5xl font-bold text-green-400">
        FitRoutine Tracker
      </h1>

    </div>
  );
}

// Export component so it can be used in other files
export default App;