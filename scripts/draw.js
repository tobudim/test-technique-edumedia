import drawCenterCircle from "./draw-center-circle.js";
import drawThreeCircles from "./draw-three-circles.js";
import writeClosestCircleToCenter from "./write-closest-circle-to-center.js";

/**
 * Draw all canvas: 3 + 1 circles, color text
 * => Return void
 * @param {object} context
 * @param {object} center position { x, y }
 * @param {array} circles
 */
export default function draw(context, center, circles) {
  drawThreeCircles(context, circles);
  drawCenterCircle(context, center);
  writeClosestCircleToCenter(context, circles, center);
  return;
}
