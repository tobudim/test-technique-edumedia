/**
 * Write color of the closest circle from the center of canvas
 * => Return void
 * @param {object} context object
 * @param {array} circles parameters [{}]
 * @param {object} center references { x, y }
 */
export default function writeClosestCircleToCenter(context, circles, center) {
  const colorToWrite = getColorOfClosestCircleToCenter(circles, center);

  context.fillStyle = "black";
  context.font = "2.5em Arial";
  context.fillText(colorToWrite, center.x - 25, 100);
  return;
}

/**
 * Return the color of the closest circle from the center of canvas
 * => Return string
 * @param {array} array of circles
 * @param {object} center references
 */
function getColorOfClosestCircleToCenter(circles, center) {
  let closestCircle = {
    distanceFromCenter: { x: 2000, y: 2000 },
  };
  circles.forEach((circle) => {
    const { position } = circle;
    const distanceFromCenter = {
      x: Math.abs(position.x - center.x),
      y: Math.abs(position.y - center.y),
    };
    if (
      hypotenus(distanceFromCenter) <
      hypotenus(closestCircle.distanceFromCenter)
    ) {
      closestCircle = {
        ...circle,
        distanceFromCenter,
      };
    }
  });

  function hypotenus({ x, y }) {
    return Math.sqrt(x * x + y * y);
  }

  return closestCircle.fillColor;
}
