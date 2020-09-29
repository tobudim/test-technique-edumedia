import drawCircle from "./draw-circle.js";

/**
 * Draw three centers in canvas
 * => Return circles parameters
 * @param {object} canvas context
 * @param {array} circles
 */
export default function drawThreeCircles(context, circles) {
  circles.forEach((circle) => {
    const { fillColor, strokeColor, radius, position } = circle;
    drawCircle(context, fillColor, strokeColor, radius, position);
  });
  return circles;
}
