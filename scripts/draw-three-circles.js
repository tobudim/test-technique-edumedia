/**
 * Draw three centers in canvas
 * => Return circles parameters
 * @param {object} canvas context
 */
export default function drawThreeCircles(context) {
  const circles = [
    {
      fillColor: "red",
      strokeColor: "black",
      radius: 50,
      position: { x: 100, y: 300 },
    },
    {
      fillColor: "yellow",
      strokeColor: "black",
      radius: 50,
      position: { x: 850, y: 500 },
    },
    {
      fillColor: "blue",
      strokeColor: "black",
      radius: 50,
      position: { x: 500, y: 650 },
    },
  ];
  circles.forEach((circle) => {
    const { fillColor, strokeColor, radius, position } = circle;
    return drawCircle(context, fillColor, strokeColor, radius, position);
  });
  return circles;
}

/**
 * Draw one circle according to parameters
 * => Return void
 * @param {object} canvas context
 * @param {string} fillColor color
 * @param {string} strokeColor color
 * @param {object} position of circle { x, y }
 */
function drawCircle(context, fillColor, strokeColor, radius, { x, y }) {
  context.fillStyle = fillColor;
  context.strokeStyle = strokeColor;
  context.lineWidth = 7;
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI);
  context.fill();
  context.stroke();
  return;
}
