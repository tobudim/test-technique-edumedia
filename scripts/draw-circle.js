/**
 * Draw one circle according to parameters
 * => Return void
 * @param {object} canvas context
 * @param {string} fillColor color
 * @param {string} strokeColor color
 * @param {object} position of circle { x, y }
 */
export default function drawCircle(
  context,
  fillColor,
  strokeColor,
  radius,
  position
) {
  const { x, y } = position;
  context.fillStyle = fillColor;
  context.strokeStyle = strokeColor;
  context.lineWidth = 7;
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI);
  context.fill();
  context.stroke();
  return;
}
