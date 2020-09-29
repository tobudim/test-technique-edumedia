"use strict";
import drawCenterCircle from "./scripts/draw-center-circle.js";
import drawThreeCircles from "./scripts/draw-three-circles.js";
import writeClosesCircleToCenter from "./scripts/write-closest-circle-to-center.js";

(() => {
  const canvas = document.getElementById("canvas");

  // Browser supports canvas ? If not, stop here.
  if (!canvas.getContext) return;

  const context = canvas.getContext("2d");
  const circles = drawThreeCircles(context);
  const center = {
    x: canvas.width / 2,
    y: canvas.height / 2,
  };

  drawCenterCircle(context, center);
  writeClosesCircleToCenter(context, circles, center);

  // canvas.onmousedown = function () {
  //   const updatedCircles = manageMouseDragDrop(context, circles);
  //   // writeClosesCircleToCenter(context, circles);
  // };
})();
