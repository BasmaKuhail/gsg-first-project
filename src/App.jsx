import { useState } from "react";
import Background from "./components/excersises-d5/Background";
import Box from "./components/excersises-d5/Ex11";

const initialPosition = {
  x: 0,
  y: 0,
};

export default function App() {
  const [shape, setShape] = useState({
    color: "orange",
    position: initialPosition,
  });

  function handleMove(dx, dy) {
    initialPosition = {x: initialPosition.x+=dx, y:initialPosition.y+=dy}
    setShape({...shape, position:{initialPosition}})
    // shape.position.x += dx;
    // shape.position.y += dy;
  }

  function handleColorChange(e) {
    console.log(shape.position)
    setShape({
      ...shape,
      color: e.target.value,
    });
  }

  return (
    <>
      <select value={shape.color} onChange={handleColorChange}>
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background position={initialPosition} />
      <Box color={shape.color} position={shape.position} onMove={handleMove}>
        Drag me!
      </Box>
    </>
  );
}