import drawCircle from "./draw-circle.js";

/**
 * Draw center black circle
 * => Return void
 * @param {object} context object
 * @param {object} center position { x, y}
 */
export default function drawCenterCircle(context, center) {
  drawCircle(context, "black", "black", 10, center);
  return;
}
