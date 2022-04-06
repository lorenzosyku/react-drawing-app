import { useEffect } from "react";

export function Canvas({
  canvasRef,
  prepareCanvas,
  startDrawing,
  finishDrawing,
  draw,
}) {
  useEffect(() => {
    prepareCanvas();
  }, []);

  return (
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
  );
}
