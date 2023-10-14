import React, { useState } from "react";
import App from "../App";

const BackgroundChanger = () => {
  const [backgroundStyle, setBackgroundStyle] = useState("default-background");

  const cycleBackground = () => {
    if (backgroundStyle === "default-background") {
      setBackgroundStyle("gradient-background");
    } else if (backgroundStyle === "gradient-background") {
      setBackgroundStyle("radial-gradient-background");
    } else if (backgroundStyle === "radial-gradient-background") {
      setBackgroundStyle("horizontal-gradient-background");
    } else if (backgroundStyle === "horizontal-gradient-background") {
      setBackgroundStyle("vertical-gradient-background");
    } else {
      setBackgroundStyle("default-background");
    }
  };

  return (
    <div
      className={`app-container flex flex-col relative h-full ${backgroundStyle}`}
    >
      <button
        onClick={cycleBackground}
        className="cycle-button fixed top-9 left-4 p-2 bg-transparent shadow-2xl bg-opacity-10 text-white rounded-full hover:bg-blue-200 hover:text-slate-700 transition duration-300 ease-in-outhover:bg-blue-600"
      >
        Change Background
      </button>
      <App />
    </div>
  );
};

export default BackgroundChanger;
