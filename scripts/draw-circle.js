/**
 * Draw one circle according to parameters
 * => Return void
 * @param {object} context
 * @param {string} fillColor
 * @param {string} strokeColor
 * @param {string} radius
 * @param {object} position of circle { x, y }
 * @param {number} lineWidth
 */
export default function drawCircle(
  context,
  fillColor,
  strokeColor,
  radius,
  { x, y },
  lineWidth
) {
  context.fillStyle = fillColor;
  context.strokeStyle = strokeColor;
  context.lineWidth = lineWidth;
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI);
  context.fill();
  context.stroke();
  return;
}
