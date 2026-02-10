import React, { useState } from "react";
import PlaygroundCard from "./PlaygroundCard";

const ColorMixer = () => {
  const [red, setRed] = useState(100);
  const [green, setGreen] = useState(150);
  const [blue, setBlue] = useState(200);

  const rowStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  };

  const labelStyle = {
    minWidth: "20px",
  };

  const valueStyle = {
    minWidth: "32px",
    textAlign: "right",
    fontSize: "0.85rem",
    opacity: 0.8,
  };

  return (
    <PlaygroundCard title="Color Mixer" className="playground-interface">
      <p>Adjust RGB sliders to mix colors in real-time.</p>

      <div
        className="color-sliders"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        {/* Red */}
        <div style={rowStyle}>
          <span style={labelStyle}>R:</span>
          <input
            type="range"
            min="0"
            max="255"
            value={red}
            onChange={(e) => setRed(Number(e.target.value))}
            style={{ flex: 1 }}
          />
          <span style={{ ...valueStyle, color: "rgb(239,68,68)" }}>{red}</span>
        </div>

        {/* Green */}
        <div style={rowStyle}>
          <span style={labelStyle}>G:</span>
          <input
            type="range"
            min="0"
            max="255"
            value={green}
            onChange={(e) => setGreen(Number(e.target.value))}
            style={{ flex: 1 }}
          />
          <span style={{ ...valueStyle, color: "rgb(34,197,94)" }}>{green}</span>
        </div>

        {/* Blue */}
        <div style={rowStyle}>
          <span style={labelStyle}>B:</span>
          <input
            type="range"
            min="0"
            max="255"
            value={blue}
            onChange={(e) => setBlue(Number(e.target.value))}
            style={{ flex: 1 }}
          />
          <span style={{ ...valueStyle, color: "rgb(59,130,246)" }}>{blue}</span>
        </div>
      </div>

      <div
        className="status-neutral"
        style={{
          marginTop: "0.5rem",
          height: "40px",
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </PlaygroundCard>
  );
};

export default ColorMixer;
