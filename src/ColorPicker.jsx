import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6">Color Picker</h1>
      <div
        className="w-64 h-32 flex items-center justify-center rounded-md shadow-md mb-4"
        style={{ backgroundColor: color }}
      >
        <p className="text-white font-bold">Selected Color: {color}</p>
      </div>
      <label className="mb-2 text-lg">Select a color</label>
      <input
        type="color"
        value={color}
        onChange={handleColorChange}
        className="w-16 h-16 p-1 border border-gray-300 rounded-lg"
      />
    </div>
  );
}

export default ColorPicker;
