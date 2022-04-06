export const ClearCanvasButton = ({ clearCanvas }) => {
  return (
    <button
      className="border m-5 rounded-md px-2 py-1 bg-yellow-200 font-semibold hover:bg-yellow-500"
      onClick={clearCanvas}
    >
      Clear
    </button>
  );
};
