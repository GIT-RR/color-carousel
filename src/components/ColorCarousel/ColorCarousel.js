import React, { useState, useEffect } from "react";
import logo from "../../logo.svg";
import ControlPanel from "../ControlPanel/ControlPanel";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./style.css";

const colors = [
  "red",
  "blue",
  "yellow",
  "green",
  "black",
  "white",
  "pink",
  "orange"
];

const ColorCarousel = () => {
  const colorTimer = 4000;

  const [id, setId] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timer, setTimer] = useState(0);

  const handlePrevious = () => {
    const count = (id + colors.length - 1) % colors.length;
    setId(count);
  };

  const handleNext = () => {
    const count = (id + 1) % colors.length;
    setId(count);
  };

  useEffect(() => {
    if (isPlaying) {
      let timeout = setTimeout(() => {
        const count = (id + 1) % colors.length;
        setId(count);
      }, colorTimer);
      return () => clearTimeout(timeout);
    }
  }, [id, isPlaying]);

  useEffect(() => {
    if (isPlaying) {
      if (timer < colorTimer) {
        let timeout = setTimeout(() => {
          setTimer(timer + 1000);
        }, 1000);
        return () => clearTimeout(timeout);
      } else {
        setTimer(0);
      }
    }
  }, [timer, isPlaying]);

  return (
    <>
      <div className="colorBox" style={{ backgroundColor: colors[id] }}>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <ProgressBar percentage={(id * 100) / (colors.length - 1)} />
      <ProgressBar percentage={(timer * 100) / colorTimer} />
      <ControlPanel
        onNext={handleNext}
        onPrevious={handlePrevious}
        onPlay={() => setIsPlaying(true)}
        onStop={() => setIsPlaying(false)}
      />
    </>
  );
};

export default ColorCarousel;
