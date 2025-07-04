// components/ShowMore.js
"use client";

import { useState } from "react";

function ShowMore({ children, line }) {
  const [isShowComplete, setShowComplete] = useState(false);

  // Map the line number to the full class name
  const clampStyles = {
    1: "line-clamp-1",
    2: "line-clamp-2",
    3: "line-clamp-3",
    4: "line-clamp-4",
    5: "line-clamp-5",
    6: "line-clamp-6",
  };

  // Select the full class name from the map
  const clampStyle = clampStyles[line] || "";

  return (
    <div className="mb-10">
      <p
        className={`text-primary-300 text-lg ${isShowComplete ? "" : clampStyle}`}
      >
        {children}
      </p>
      <button
        className="text-primary-600 cursor-pointer border-b-1"
        onClick={() => setShowComplete((s) => !s)}
      >
        {isShowComplete ? "Show less" : "Show more"}
      </button>
    </div>
  );
}

export default ShowMore;
