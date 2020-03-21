import React from "react";

const ControlPanel = ({ onNext, onPrevious, onPlay, onStop }) => {
  return (
    <div>
      <input type="button" value="Previous" onClick={onPrevious} />
      <input type="button" value="Next" onClick={onNext} />
      <input type="button" value="Stop" onClick={onStop} />
      <input type="button" value="Play" onClick={onPlay} />
    </div>
  );
};

export default ControlPanel;
