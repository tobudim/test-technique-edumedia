"use strict";

import draw from "./scripts/draw.js";
import initCircles from "./scripts/init-circles.js";
import getClickedOnCircle from "./scripts/get-clicked-on-circle.js";

(() => {
  const canvas = document.getElementById("canvas");

  // Browser supports canvas ? If not, stop here.
  if (!canvas.getContext) return;

  const bouding = canvas.getBoundingClientRect();
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
    const clickedPosition = {
      x: parseInt(event.clientX - bouding.left, 10),
      y: parseInt(event.clientY - bouding.top, 10),
    };
    clickedCircle = getClickedOnCircle(circles, clickedPosition);
    if (!clickedCircle) return;
    mouseIsDown = true;
    mousePosition = clickedPosition;
  };

  canvas.onmousemove = (event) => {
    if (!mouseIsDown) return;

    const circle = { ...clickedCircle };
    const updatedCircles = [...circles];
    const currentPosition = {
      x: parseInt(event.clientX - bouding.left, 10),
      y: parseInt(event.clientY - bouding.top, 10),
    };
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
