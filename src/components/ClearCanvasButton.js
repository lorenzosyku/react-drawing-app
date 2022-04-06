export const ClearCanvasButton = ({ clearCanvas, prepareCanvas }) => {
  return (
    <div className="m-5">
      <button
        className="border  rounded-md px-2 py-1 bg-blue-300 font-semibold hover:bg-blue-700 hover:text-gray-200"
        onClick={clearCanvas}
      >
        Clear
      </button>
      <button
        className="border  rounded-md px-2 py-1 bg-blue-300 font-semibold hover:bg-blue-700 hover:text-gray-200"
        onClick={prepareCanvas}
      >
        Draw
      </button>
    </div>
  );
};
