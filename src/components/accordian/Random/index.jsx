import { useEffect, useState } from "react";

export default function Random() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      className="w-screen h-screen flex flex-col items-center justify-center transition-all duration-500"
      style={{ background: color }}
    >
      {/* Color Display */}
      <div className="text-center text-white font-bold">
        <h3 className="text-3xl uppercase tracking-widest shadow-md">
          {typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}
        </h3>
        <h1 className="text-5xl mt-4 bg-black/40 px-8 py-4 rounded-lg shadow-lg">
          {color}
        </h1>
      </div>

      {/* Buttons */}
      <div className="mt-10 flex gap-6">
        <button
          onClick={() => setTypeOfColor("hex")}
          className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-xl hover:scale-105 transition-all"
        >
          Create HEX Color
        </button>
        <button
          onClick={() => setTypeOfColor("rgb")}
          className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-full shadow-xl hover:scale-105 transition-all"
        >
          Create RGB Color
        </button>
        <button
          onClick={typeOfColor === "hex" ? handleCreateRandomHexColor : handleCreateRandomRgbColor}
          className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-yellow-500 to-orange-600 text-black rounded-full shadow-xl hover:scale-105 transition-all"
        >
          Generate Random Color
        </button>
      </div>
    </div>
  );
}
