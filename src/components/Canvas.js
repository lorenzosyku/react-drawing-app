export function Canvas({
  canvasRef,
  startDrawing,
  finishDrawing,
  draw,
}) {
  return (
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
  );
}
