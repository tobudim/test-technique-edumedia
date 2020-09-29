import drawCircle from "./draw-circle.js";

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
    drawCircle(context, fillColor, strokeColor, radius, position);
  });
  return circles;
}
