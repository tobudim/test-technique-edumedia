"use strict";

import circleTakesHeight from "./scripts/circle-takes-height.js";
import draw from "./scripts/draw.js";
import initCircles from "./scripts/init-circles.js";
import getClickedOnCircle from "./scripts/get-clicked-on-circle.js";
import getCursorPosition from "./scripts/get-cursor-position.js";

(() => {
  const canvas = document.getElementById("canvas");
  if (!canvas.getContext) return; // stop if no support

  const context = canvas.getContext("2d");
  const center = {
    x: canvas.width / 2,
    y: canvas.height / 2,
  };
  let circles = initCircles;
  let clickedCircle = null;
  let mouseIsDown = false;
  let mousePosition = {};

  draw(context, center, circles);

  canvas.onmousedown = function (event) {
    event.preventDefault();
    event.stopPropagation();
    const clickedPosition = getCursorPosition(canvas, event);
    clickedCircle = getClickedOnCircle(circles, clickedPosition);
    if (!clickedCircle) return;
    mouseIsDown = true;
    circleTakesHeight(clickedCircle);
    mousePosition = clickedPosition;
  };

  canvas.onmousemove = (event) => {
    if (!mouseIsDown) return;
    const circle = { ...clickedCircle };
    const updatedCircles = [...circles];
    const currentPosition = getCursorPosition(canvas, event);
    const movement = {
      x: currentPosition.x - mousePosition.x,
      y: currentPosition.y - mousePosition.y,
    };
    circle.position.x += movement.x;
    circle.position.y += movement.y;
    const index = updatedCircles.indexOf(clickedCircle);
    updatedCircles.splice(index, 1, circle);

    context.clearRect(0, 0, canvas.width, canvas.height);
    draw(context, center, circles);
    mousePosition = currentPosition;
  };

  canvas.onmouseup = () => (mouseIsDown = false);
})();
