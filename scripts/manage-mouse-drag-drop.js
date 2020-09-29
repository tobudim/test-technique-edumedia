import drawCircle from "./draw-circle.js";
import drawCenterCircle from "./draw-center-circle.js";
import writeClosestCircleToCenter from "./write-closest-circle-to-center.js";

/**
 * Draw three centers in canvas
 * => Return circles parameters || void
 * @param {object} canvas
 * @param {object} canvas context
 * @param {array} circles
 * @param {object} mouse position { x, y }
 * @param {object} canvas bounding
 * @param {object} center
 */
export default function manageMouseDragDrop(
  canvas,
  context,
  circles,
  mousePosition,
  bounding,
  center
) {
  const isInsideACircle = isMouseInsideACircle(circles, mousePosition);
  if (!isInsideACircle.result) return;
  let mouseIsDown = true;
  canvas.onmousemove = (event) => {
    if (!mouseIsDown) return;
    const movement = getMouseMovement(event, mousePosition, bounding);
    dragCircle(movement, isInsideACircle.circle, circles, context, center);
  };
  canvas.onmouseup = () => (mouseIsDown = false);
  return;
}

/**
 * Tells if mouse click happend inside a circle
 * => Returns boolean
 * @param {array} circles
 * @param {object} mousePosition { x, y }
 */
function isMouseInsideACircle(circles, mousePosition) {
  let clickedInCircle = {
    result: false,
    circle: null,
  };
  circles.forEach((circle) => {
    const distances = {
      x: circle.position.x - mousePosition.x,
      y: circle.position.y - mousePosition.y,
    };
    if (
      distances.x * distances.x + distances.y * distances.y <
      circle.radius * circle.radius
    ) {
      clickedInCircle = {
        result: true,
        circle,
      };
    }
  });
  return clickedInCircle;
}

/**
 * Get Mouse Movement
 * @param {object} event
 * @param {object} mousePosition { x, y }
 * @param {bounding} canvas bounding
 */
function getMouseMovement(event, mousePosition, bounding) {
  const startingPosition = mousePosition;
  const currentPosition = {
    x: parseInt(event.clientX - bounding.left, 10),
    y: parseInt(event.clientY - bounding.top, 10),
  };
  const movement = {
    x: startingPosition.x - currentPosition.x,
    y: startingPosition.y - currentPosition.y,
  };
  return movement;
}

function dragCircle(movement, circle, circles, context, center) {
  const index = circles.indexOf(circle);
  circle.position.x += movement.x;
  circle.position.y += movement.y;
  circles.splice(index, 1, circle);
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawCenterCircle(context, center);
  writeClosestCircleToCenter(context, circles, center);
  circles.forEach((circle) => {
    const { fillColor, strokeColor, radius, position } = circle;
    drawCircle(context, fillColor, strokeColor, radius, position);
  });
}
