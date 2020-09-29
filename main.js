"use strict";
import drawCenterCircle from "./scripts/draw-center-circle.js";
import drawThreeCircles from "./scripts/draw-three-circles.js";
import writeClosestCircleToCenter from "./scripts/write-closest-circle-to-center.js";
import manageMouseDragDrop from "./scripts/manage-mouse-drag-drop.js";

(() => {
  const canvas = document.getElementById("canvas");
  const bouding = canvas.getBoundingClientRect();

  // Browser supports canvas ? If not, stop here.
  if (!canvas.getContext) return;

  const context = canvas.getContext("2d");
  const circles = drawThreeCircles(context);
  const center = {
    x: canvas.width / 2,
    y: canvas.height / 2,
  };

  drawCenterCircle(context, center);
  writeClosestCircleToCenter(context, circles, center);

  canvas.onmousedown = function (event) {
    event.preventDefault();
    event.stopPropagation();
    const mousePosition = {
      x: parseInt(event.clientX - bouding.left),
      y: parseInt(event.clientY - bouding.top),
    };
    const updatedCircles = manageMouseDragDrop(
      canvas,
      context,
      circles,
      mousePosition,
      bouding,
      center
    );
    // writeClosesCircleToCenter(context, circles);
  };
})();
