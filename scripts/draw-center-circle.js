/**
 * Draw center black circle
 * => Return void
 * @param {object} context object
 * @param {object} center reference { x, y}
 */
export default function drawCenterCircle(context, { x, y }) {
  context.fillStyle = "black";
  context.strokeStyle = "black";
  context.lineWidth = 1;
  context.beginPath();
  context.arc(x, y, 10, 0, 2 * Math.PI);
  context.fill();
  context.stroke();
  return;
}
