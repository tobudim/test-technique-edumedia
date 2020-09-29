/**
 * Get position of click
 * => Return object { x, y }
 * @param {object} canvas
 * @param {object} event
 */
export default function getCursorPosition(canvas, event) {
  const bounding = canvas.getBoundingClientRect();
  const clickedPosition = {
    x: parseInt(event.clientX - bounding.left, 10),
    y: parseInt(event.clientY - bounding.top, 10),
  };
  return clickedPosition;
}
