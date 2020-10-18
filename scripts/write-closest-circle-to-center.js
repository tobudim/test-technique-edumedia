/**
 * Write color of the closest circle from the center of canvas
 * => Return void
 * @param {object} context
 * @param {array} circles
 * @param {object} center position { x, y }
 */
export default function writeClosestCircleToCenter(context, circles, center) {
  const colorToWrite = getColorOfClosestCircleToCenter(circles, center);
  context.fillStyle = "black";
  context.font = "2.5em Arial";
  context.textAlign = "center";
  context.fillText(colorToWrite.colorName, center.x, 100);
  context.strokeStyle = colorToWrite.fillColor;
  context.rect(center.x - 30, 110, 60, 1);
  context.stroke();
  return;
}

/**
 * Return the color of the closest circle from the center of canvas
 * => Return string
 * @param {array} circles
 * @param {object} center position { x, y }
 */
function getColorOfClosestCircleToCenter(circles, center) {
  let closestCircle = {
    distanceFromCenter: { x: 2000, y: 2000 },
  };
  circles.forEach((circle) => {
    const { position } = circle;
    circle.distanceFromCenter = {
      x: Math.abs(position.x - center.x),
      y: Math.abs(position.y - center.y),
    };
    if (
      hypotenus(circle.distanceFromCenter) <
      hypotenus(closestCircle.distanceFromCenter)
    ) {
      closestCircle = circle;
    }
  });

  function hypotenus({ x, y }) {
    return Math.sqrt(x * x + y * y);
  }

  const { fillColor, colorName } = closestCircle;

  return { fillColor, colorName };
}
