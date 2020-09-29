import drawCenterCircle from "./draw-center-circle.js";
import drawThreeCircles from "./draw-three-circles.js";
import writeClosestCircleToCenter from "./write-closest-circle-to-center.js";

export default function draw(context, center, circles) {
  drawThreeCircles(context, circles);
  drawCenterCircle(context, center);
  writeClosestCircleToCenter(context, circles, center);
}
